import data from "../data/index.js";
import Experience from "./experience.js";
import Education from "./education.js";

const fillIn = (selector, info) => {
  const el = document.querySelector(selector);
  el.textContent = info;
};

document.title = `${data.firstName} ${data.lastName} - Resume`;

fillIn(".first", data.firstName);
fillIn(".last", data.lastName);
fillIn("#email", data.email);
fillIn("#location", data.location);

fillIn("#intro", data.intro);
fillIn("#extra-info", data.extraInfo);
fillIn("#position-title", data.positionTitle);

const experienceEl = document.getElementById("experience");
const educationEl = document.getElementById("education");
const skillsEl = document.querySelector("#skills ul");
const additionalSkillsEl = document.querySelector("#additional-skills ul");

const { experience, education, skills, additionalSkills } = data;

for (let i in experience) {
  const item = experience[i];
  if (!item.hide) {
    const job = new Experience(item);
    experienceEl.appendChild(job.render());
  }
}

for (let i in education) {
  const item = education[i];
  const job = new Education(item);
  educationEl.appendChild(job.render());
}

for (let i in skills) {
  const skill = skills[i];
  if (!skill.hide) {
    const item = document.createElement("li");
    item.textContent = skill.name;
    skillsEl.appendChild(item);
  }
}

for (let i in additionalSkills) {
  const skill = additionalSkills[i];
  if (!skill.hide) {
    const item = document.createElement("li");
    item.textContent = skill.name;
    additionalSkillsEl.appendChild(item);
  }
}
