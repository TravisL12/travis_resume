import data from "../data/index.js";
import Experience from "./experience.js";
import Education from "./education.js";

const fillInfo = (selector, info) => {
  const el = document.querySelector(selector);
  el.textContent = info;
};

const buildExperience = (experience) => {
  const experienceEl = document.getElementById("experience");
  for (let i in experience) {
    const item = experience[i];
    if (!item.hide) {
      const job = new Experience(item);
      experienceEl.appendChild(job.render());
    }
  }
};

const buildEducation = (education) => {
  const educationEl = document.getElementById("education");
  for (let i in education) {
    const item = education[i];
    const job = new Education(item);
    educationEl.appendChild(job.render());
  }
};

const buildSkills = (skills) => {
  const skillsEl = document.querySelector("#skills ul");
  if (!skills || skills.length === 0) {
    document.querySelector("#skills").remove();
    return;
  }

  for (let i in skills) {
    const skill = skills[i];
    if (!skill.hide) {
      const item = document.createElement("li");
      item.textContent = skill.name;
      skillsEl.appendChild(item);
    }
  }
};

const buildAdditionalSkills = (additionalSkills) => {
  const additionalSkillsEl = document.querySelector("#additional-skills ul");
  if (!additionalSkills || additionalSkills.length === 0) {
    document.querySelector("#additional-skills").remove();
    return;
  }

  for (let i in additionalSkills) {
    const skill = additionalSkills[i];
    if (!skill.hide) {
      const item = document.createElement("li");
      item.textContent = skill.name;
      additionalSkillsEl.appendChild(item);
    }
  }
};

const buildSites = (sites) => {
  const sitesEl = document.querySelector(".header-portfolio ul");
  for (let i in sites) {
    const site = sites[i];
    const list = document.createElement("li");
    list.innerHTML = `
      <a href="${site.url}" target="_blank">
        <span class="${site.icon}"></span>
        <span>${site.display}</span>
      </a>
      `;
    sitesEl.appendChild(list);
  }
};

document.title = `${data.firstName} ${data.lastName} - Resume`;

fillInfo(".first", data.firstName);
fillInfo(".last", data.lastName);
fillInfo("#email", data.email);
fillInfo("#location", data.location);

fillInfo("#intro", data.intro);
fillInfo("#extra-info", data.extraInfo);
fillInfo("#position-title", data.positionTitle);

buildExperience(data.experience);
buildEducation(data.education);
buildSkills(data.skills);
buildAdditionalSkills(data.additionalSkills);
buildSites(data.sites);
