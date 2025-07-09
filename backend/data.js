const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' }
];

const skills = [
  { name: 'HTML', level: 'Mahir', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', level: 'Mahir', image: 'https://ralfvanveen.com/wp-content/uploads/2021/06/CSS-_-Glossary.svg' },
  { name: 'JavaScript', level: 'Mahir', image: 'https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png' },
]

const projects = [
  {
    title: 'Santapin',
    image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1728896922/ghiq7hkymtom2wzmha5t.jpg',
    description: 'Jual makanan online dengan website.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#'
  }
];

module.exports = { educationHistory, skills, projects };