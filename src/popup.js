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
