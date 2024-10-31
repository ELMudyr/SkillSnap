// import data from '../data.json'
// import { getContentJson } from './main.js'
const toggleButton = document.getElementById("Toggle2")
const nameValue = document.getElementById("nameValue")
const locationValue = document.getElementById("locationValue")
const skillsContainer = document.getElementById("skillsContainer")
const jobValue = document.getElementById("jobValue")
const experienceContainer = document.getElementById("experienceContainer")
const educationContainer = document.getElementById("educationContainer")
const softSkillsContainer = document.getElementById("softSkillsContainer")
// const display = document.getElementById("display")
const offDiv = document.getElementById("off")
const onDiv = document.getElementById("on")
const onDiv2 = document.getElementById("on2")

onDiv2.classList.add("hidden");
onDiv2.classList.remove("block");
onDiv.classList.add("hidden");
onDiv.classList.remove("block");

function toggleClasses(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

toggleButton.addEventListener("change", async function() {
  if (this.checked) {
    // const data = await exntractAndFetch()
    toggleClasses(onDiv2, "block", "hidden");
    toggleClasses(onDiv, "block", "hidden");
    toggleClasses(offDiv, "hidden", "block");
    if (data) {
    }
  } else {
    toggleClasses(onDiv2, "hidden", "block");
    toggleClasses(onDiv, "hidden", "block");
    toggleClasses(offDiv, "block", "hidden");
  }
});


function renderContent() {
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
}


