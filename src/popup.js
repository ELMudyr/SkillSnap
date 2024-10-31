// import data from "../data.json"
import { extractAndFetch } from './main.js'
const toggleButton = document.getElementById("Toggle2")
const nameValue = document.getElementById("nameValue")
const locationValue = document.getElementById("locationValue")
const skillsContainer = document.getElementById("skillsContainer")
const jobValue = document.getElementById("jobValue")
const experienceContainer = document.getElementById("experienceContainer")
const educationContainer = document.getElementById("educationContainer")
const softSkillsContainer = document.getElementById("softSkillsContainer")
const contentDiv = document.getElementById("contentDiv")
const exportButton = document.getElementById("Export")
const fetch = document.getElementById("fetch")
const fetchDiv = document.getElementById("fetchDiv")


function toggleClasses(element, addClass, removeClass) {

  element.classList.add(addClass);
  element.classList.remove(removeClass);
}
toggleClasses(contentDiv, "hidden", "block")
toggleClasses(exportButton, "hidden", "block")
toggleClasses(fetchDiv, "block", "hidden")
toggleClasses(errorDiv, "hidden", "block")

fetch.checked = true
fetch.addEventListener("click", async function() {

  const data = await extractAndFetch()
  if (data) {
    renderContent(data)
    toggleClasses(exportButton, "block", "hidden");
    toggleClasses(contentDiv, "block", "hidden");
    toggleClasses(fetchDiv, "hidden", "block")
  } else {
    toggleClasses(exportButton, "hidden", "block");
    toggleClasses(contentDiv, "hidden", "block");
    toggleClasses(errorDiv, "block", "hidden")
    toggleClasses(fetchDiv, "hidden", "block")
  }
})

toggleButton.addEventListener("change", function() {
  if (this.checked) {
    toggleClasses(fetchDiv, "block", "hidden")
  } else {
    toggleClasses(fetchDiv, "hidden", "block")
    toggleClasses(exportButton, "hidden", "block");
    toggleClasses(contentDiv, "hidden", "block");
    toggleClasses(errorDiv, "hidden", "block")
  }
});


function renderContent(data) {
  nameValue.textContent = data.fullname
  locationValue.textContent = data.location
  jobValue.textContent = data.jobTitle

  skillsContainer.innerHTML = ""
  data.technicalSkill.forEach((skill) => {
    const skillH1 = document.createElement("h1")
    skillH1.className = "text-sm font-blue"
    skillH1.innerHTML = `${skill}`
    skillsContainer.appendChild(skillH1)
  })
  softSkillsContainer.innerHTML = ""
  data.softSkill.forEach((softSkill) => {
    const softSkillH1 = document.createElement("h1")
    softSkillH1.innerHTML = `${softSkill}`
    softSkillsContainer.appendChild(softSkillH1)
  })

  experienceContainer.innerHTML = ""
  data.workExperience.forEach((experience) => {
    const experienceH1 = document.createElement("h1")
    experienceH1.innerHTML = `<li>${experience.duration} | ${experience.title}</li>`
    experienceContainer.appendChild(experienceH1)
  })

  educationContainer.innerHTML = ""
  data.education.forEach((education) => {
    const educationH1 = document.createElement("h1")
    educationH1.innerHTML = `<li> ${education.degree}  ${education.university}</li>`
    educationContainer.appendChild(educationH1)
  })
}


