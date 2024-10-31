export async function extractAndFetch() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const htmlContent =
            document.querySelector('.scaffold-layout__main')?.outerHTML ||
            document.querySelector('section.profile')?.outerHTML;

          if (htmlContent) {
            return htmlContent.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
          } else {
            console.log('Profile section not found.');
            return null;
          }
        }
      }, async (injectionResults) => {
        const extractedText = injectionResults[0]?.result;
        if (extractedText) {
          // console.log(extractedText);
          const data = await fetchLlama(extractedText); // Await the fetch function
          resolve(data); // Resolve with the fetched data
        } else {
          resolve(null); // Resolve with null if no extractedText
        }
      });
    });
  });
}

async function fetchLlama(extractedText) {
  const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
  const GROQ_API_KEY = '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';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'From the text provided Extract the following to JSON format: Fullname, Location, Job Title, Work Experience, Education, Technical Skill, Soft Skills. Keep it short and compact (duration should always be a number of years in both education and experience) (technical skills should be no more than 3 words) \nexample:\n                    {\n                      "fullname": "",\n                      "location": "",\n                      "jobTitle": "",\n                      "workExperience": [\n                        {\n                          "company": "",\n                          "title": "",\n                          "duration": "2 Years"\n                        },\n                      ],\n                      "education": [\n                        {\n                          "university": "",\n                          "degree": "",\n                          "duration": ""\n                        },\n                      ],\n                      "technicalSkill": [\n                        "HTML",\n                      ],\n                      "softSkill": [\n                        "Leadership",\n                      ]\n                    }  '
          },
          {
            role: 'assistant',
            content: extractedText
          }
        ],
        model: 'llama3-8b-8192',
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
        response_format: {
          type: 'json_object'
        },
        stop: null
      })
    });

    if (!response.ok) throw new Error(`Response error: ${response.statusText}`);

    const data = await response.json();
    // console.log(data.choices[0]?.message?.content || "");
    return JSON.parse(data.choices[0]?.message?.content || "{}"); // Return the parsed content
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Return null on error
  }
}
