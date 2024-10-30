document.getElementById('onOff').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
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
        console.log(extractedText)
        await fetchLlama(extractedText);
      }
    });
  });
});
let contentJson = ""
export async function fetchLlama(extractedText) {
  const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
  const apiKey = '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';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `Extract the following: Fullname, Location, Job Title, Work Experience , Education, Technical Skill, Soft Skills. Keep it short and compact duration should always be a numer o years in both education and experience in JSON format from this text: ${extractedText}
            example:
                    {
                      "fullname": "",
                      "location": "",
                      "jobTitle": "",
                      "workExperience": [
                        {
                          "company": "",
                          "title": "",
                          "duration": "2 Years"
                        },
                      ],
                      "education": [
                        {
                          "university": "",
                          "degree": "",
                          "duration": ""
                        },
                      ],
                      "technicalSkill": [
                        "HTML",
                      ],
                      "softSkill": [
                        "Leadership",
                      ]
                    }
                    `
          }
        ],
        model: "llama3-8b-8192",
        temperature: 1.4,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
        "response_format": {
          "type": "json_object"
        },
        stop: null
      })
    });

    if (!response.ok) throw new Error(`Response error: ${response.statusText}`);

    const data = await response.json();
    console.log(data.choices[0]?.message?.content || "");
    contentJson = JSON.parse(data.choices[0]?.message?.content || "{}")
    return contentJson
  } catch (error) {
    console.error("Fetch error:", error);
    return null
  }
}
export function getContentJson() {
  return contentJson
}
