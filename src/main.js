document.getElementById('onOff').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        const htmlContent =
          document.querySelector('.scaffold-layout__main')?.outerHTML ||
          document.querySelector('section.profile')?.outerHTML;

        if (htmlContent) {
          const extractedText = htmlContent.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
          // console.log(extractedText);
          return extractedText;
        } else {
          console.log('Profile section not found.');
        }
      }
    });
  });
});


import Groq from 'groq-sdk';

const groq = new Groq();
async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": `Extract the following : Fullname, Location, Job Title, Work Experience, Education, Technical Skill, Soft Skills. Keep it short, compact to only one lines or few words in JSON. from this text:${extractedText} `
      }
    ],
    "model": "llama3-8b-8192",
    "temperature": 1.14,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "response_format": {
      "type": "json_object"
    },
    "stop": null
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
