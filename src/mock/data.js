import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Braden Wright | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am Braden Wright. I am a full stack developer. Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Braden Wright',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am an enthusiastic junior developer who has years of experience developing on the frontend. I enjoy working with javascript and javascript frontend frameworks like react. I have worked with java and php on the backend and used frameworks like spring and laravel. Most of my time has been spent at BYU-Hawaii where I worked a lot with CMSs.`,
  paragraphTwo:
    'I enjoy learning new things and working with people who like to push each other to become better. I can put my head down and put in the work in order to deliver what is expected of me.',
  paragraphThree: 'Check out my resume to view all my qualifications!',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vRekYSpy5CnYsarnvXZk6ogTpw-j16Oof71yLQp37Q_G2IQp0kDS_y8gqHePC0xRk7HyhZsW0CBj7QN/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'llc.png',
    title: 'LLC Launch Path',
    info: 'While working at Martindale-Nolo, one of the projects I helped implement was a new LLC launch path. This was designed to have people use us to create their own LLCs. On this project, I worked with another frontend developer to create the sites with html, less, and js. Our graphic designer handed us the templates and we turned their templates into pixel perfect, mobile first sites.',
    info2: '',
    url: 'https://www.nolo.com/lander/entry/llc/llcname',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'soccer.png',
    title: 'Soccer Stats Webpage',
    info: 'This is a project that I built using create-react-app. I built this site because I love watching the Premier League. This site demonstrates my skills for creating a website from scratch, using react, styling with scss and working with apis.',
    info2: '',
    url: 'https://soccer-stats-lander.herokuapp.com/',
    repo: 'https://github.com/brad0s/epl-webapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Wedding App',
    info: 'App created in react-native with expo-cli and firebase.',
    info2: '',
    videoUrl: 'https://youtu.be/EpLFJR_OxYU',
    url: '',
    repo: 'https://github.com/brad0s/weddingApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'brados blogs',
    info: `I just recently started a blog where I post some "how-tos" and share other stuff that I've learned. I created the website using gatsby, react, and markdown. Check out one of my articles!`,
    info2: '',
    url: 'https://brad0s.github.io/',
    repo: 'https://github.com/brad0s/brad0s.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bradentwright@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Braden23763605',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wright-braden/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/brad0s',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
