import experienceData from "../data/experience.js";
import educationData from "../data/education.js";

import Experience from "./experience.js";
import Education from "./education.js";

const experienceEl = document.getElementById("experience");
const educationEl = document.getElementById("education");

for (let i in experienceData) {
  const job = new Experience(experienceData[i]);
  experienceEl.appendChild(job.render());
}

for (let i in educationData) {
  const job = new Education(educationData[i]);
  educationEl.appendChild(job.render());
}
