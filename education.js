class Education {
  constructor(info) {
    this.school = info.school;
    this.degree = info.degree;
    this.year = info.year;
    this.location = info.location;
    this.el = document.createElement('template');
  }

  createHtml () {
    return `
    <div class="education-item">
      <p class="degree">${this.degree || ''}</p>
      <p class="school">${this.school}</p>
      <p class="year">${this.year}</p>
      <p class="location">${this.location}</p>
    </div>
    `;
  }

  render () {
    this.el.innerHTML = this.createHtml();
    return this.el.content.firstElementChild;
  }
}

const education = [
  {
    school: 'Univ. of California at Riverside',
    degree: 'BS Theoretical Physics',
    year: '1999 - 2004',
    location: 'Riverside, CA',
  },
  {
    school: 'Salford University',
    degree: 'MSc Audio Acoustics',
    year: '2005 - 2007',
    location: 'Manchester, England',
  },
  {
    school: 'Dev Bootcamp',
    year: 'Summer 2013',
    location: 'San Francisco, CA',
  },
];

const educationEl = document.getElementById('education');
for(let i in education) {
  const job = new Education(education[i]);
  educationEl.appendChild(job.render());
}
