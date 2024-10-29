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
          console.log(extractedText);
          return extractedText;
        } else {
          console.log('Profile section not found.');
        }
      }
    });
  });
});


// const groq = new Groq();
// async function main() {
//   const chatCompletion = await groq.chat.completions.create({
//     "messages": [
//       {
//         "role": "system",
//         "content": "Extract the following information from the HTML text:\n  - Full Name\n  - Location\n  - Job Title\n-Education"
//       },
//     ],
//     "model": "llama3-8b-8192",
//     "temperature": 1,
//     "max_tokens": 1024,
//     "top_p": 1,
//     "stream": true,
//     "stop": null
//   });
//
//   for await (const chunk of chatCompletion) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
// }
//
// main();
