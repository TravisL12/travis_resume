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
    description: `
      I worked on the commenting system (Notes & Activities team) for Tumblr's web platform.
      During my time a complete re-write of the web client was undertaken and I
      rebuilt the notes interface in ReactJS and Typescript with 100% test coverage using
      Enzyme and Jest.
    `,
  },
  {
    name: 'Sincerely Inc.',
    title: 'Full Stack Developer',
    term: 'May 2014 - November 2016',
    location: 'San Francisco',
    description: `
      I rewrote Sincerely's entire Admin system as a web client using AngularJS and Grunt.
      During this time I began working with PHP to build out API endpoints needed for
      the Admin client to interface with. I also rebuit the Sincerely.com web page
      as a web client using AngularJS.
    `,
  },
  {
    name: '50Cubes',
    title: 'Junior Developer',
    term: 'October 2013 - April 2014',
    location: 'San Francisco',
    description: `
      I used the MEAN stack to create Wardrobe.me, a social network
      focused on fashion and clothing. Various ideas were prototyped
      and built out for the site including quiz games that focused on clothing
      and brands and a reward system using online coupons.
    `,
  },
];

const experienceEl = document.getElementById('experience');
for(let i in jobs) {
  const job = new Experience(jobs[i]);
  experienceEl.appendChild(job.render());
}
