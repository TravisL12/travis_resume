class Education {
  constructor(info) {
    this.school = info.school;
    this.degree = info.degree;
    this.year = info.year;
    this.location = info.location;
    this.el = document.createElement("template");
  }

  createHtml() {
    return `
    <div class="education-item">
      <p class="degree">${this.degree || ""}</p>
      <p class="school">${this.school}</p>
      <p class="year">${this.year}</p>
      <p class="location">${this.location}</p>
    </div>
    `;
  }

  render() {
    this.el.innerHTML = this.createHtml();
    return this.el.content.firstElementChild;
  }
}

export default Education;
