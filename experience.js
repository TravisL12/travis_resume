class Experience {
  constructor(info) {
    this.name = info.name;
    this.title = info.title;
    this.term = info.term;
    this.location = info.location;
    this.description = info.description;
    this.el = document.createElement('template');
  }

  createHtml () {
    return `
    <div class="experience">
      <p class="company">${this.name} / ${this.title}</p>
      <p class="title">${this.term}</p>
      <p class="description">${this.description}</p>
    </div>
    `;
  }

  render () {
    this.el.innerHTML = this.createHtml();
    return this.el.content.firstElementChild;
  }
}

const jobs = [
  {
    name: 'Tumblr',
    title: 'Front End Developer',
    term: 'November 2016 - Current',
    location: 'San Francisco',
    description: 'front end development using React and Typescript',
  },
  {
    name: 'Sincerely Inc.',
    title: 'Full Stack Developer',
    term: 'May 2014 - November 2016',
    location: 'San Francisco',
    description: 'full stack development using Angular 1',
  },
  {
    name: '50Cubes',
    title: 'Junior Developer',
    term: 'October 2013 - April 2014',
    location: 'San Francisco',
    description: 'God knows what',
  },
];

const experienceEl = document.getElementById('experience');
for(let i in jobs) {
  const job = new Experience(jobs[i]);
  experienceEl.appendChild(job.render());
}
