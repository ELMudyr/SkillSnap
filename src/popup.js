// import data from '../data.json'
import { fetchLlama, getContentJson } from './main.js'
const nameValue = document.getElementById("nameValue")
const locationValue = document.getElementById("locationValue")
const skillsContainer = document.getElementById("skillsContainer")
const jobValue = document.getElementById("jobValue")
const experienceContainer = document.getElementById("experienceContainer")
const educationContainer = document.getElementById("educationContainer")
const softSkillsContainer = document.getElementById("softSkillsContainer")
const display = document.getElementById("display")

display.addEventListener("click", () => {
  const data = getContentJson()
  console.log(data)
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
})


