class Experience {
  constructor(info) {
    this.name = info.name;
    this.title = info.title;
    this.term = info.term;
    this.location = info.location;
    this.description = info.description;
    this.el = document.createElement("template");
  }

  createHtml() {
    return `
    <div class="experience">
      <p class="company">${this.name} / ${this.title}</p>
      <p class="title">${this.term}</p>
      <p class="description">${this.description}</p>
    </div>
    `;
  }

  render() {
    this.el.innerHTML = this.createHtml();
    return this.el.content.firstElementChild;
  }
}

export default Experience;
