
# Skill Snap - LinkedIn Profile Summarizer

Skill Snap is a web extension designed to streamline the recruitment process by automatically extracting key information from LinkedIn profiles. It summarizes critical details such as full name, location, job title, work experience, education, technical skills, and soft skills into a concise JSON format, making it easier for recruiters to evaluate potential candidates.

## Features

- **Automatic Profile Extraction:** Skill Snap automatically detects LinkedIn profiles and extracts relevant data.
- **Summary Generation:** Utilizes AI to summarize the extracted information into a structured format.
- **User-Friendly Interface:** Toggle the extension to view extracted data and summaries with ease.

## Installation

To download and install the Skill Snap extension, follow these steps:

1. **Download the Source Code:**
   - Clone or download the repository from GitHub:
     ```bash
     git clone --branch build https://github.com/ELMudyr/SkillSnap.git
     ```
   - Alternatively, you can download the ZIP file directly from GitHub and extract it.

2. **Load the Extension in Your Browser:**
   - **For Google Chrome:**
     1. Open Chrome and go to `chrome://extensions/`.
     2. Enable "Developer mode" in the top right corner.
     3. Click on "Load unpacked" and select the directory where you downloaded Skill Snap.
   - **For Firefox:**
     1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
     2. Click on "Load Temporary Add-on" and select the `manifest.json` file from the Skill Snap directory.

3. **Use the Extension:**
   - Navigate to a LinkedIn profile.
   - Click the Skill Snap icon to toggle the extraction and view the summarized data.

## API Used

Skill Snap utilizes the [Groq API](https://api.groq.com) for processing the extracted text. The API enables the extraction and summarization of relevant details from the provided content.

### API Details

- **Endpoint:** `https://api.groq.com/openai/v1/chat/completions`
- **Authorization:** Requires an API key for access (replace with your own if necessary or use mine it's already included in the repo :) ).
- **Request Format:** JSON object containing messages and instructions for the AI model.

## AI Language Model

Skill Snap employs the `llama3-8b-8192` AI language model from Groq for summarizing the extracted information. This model is designed to understand and generate human-like text, making it suitable for tasks such as content summarization and information extraction.

### Features of the Model

- **High Performance:** Efficiently processes large amounts of text.
- **Contextual Understanding:** Capable of understanding complex queries and providing coherent responses.

## Contributing

If you'd like to contribute to Skill Snap, please fork the repository and submit a pull request.
I would be more than happy to work with you.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, feel free to open an issue on GitHub.

## To-Do List

- [x] Implement error handling for API responses.
- [ ] Add functionality to save extracted data as a file.
- [ ] Implement a summarization for Personal Portfolio Websites
- [ ] Gather user feedback for further improvements.
