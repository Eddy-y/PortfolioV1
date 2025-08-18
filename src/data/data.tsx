import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
{/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/}
import heroImage from '../images/VolleyballBack.jpg';

import RAG_img from '../images/portfolio/RAG.png';
import estimator_img from '../images/portfolio/Estimator.png';
//import thunder_img from '../images/portfolio//Thunder.jpg';
import thunder2_img from '../images/portfolio//Thunder2.jpg';
import chucho_img from '../images/portfolio//Chucho.jpg';
import chai_img from '../images/portfolio//Chai.jpg';


import dieWithASmileImage from '../images/songs/DieWithASmile.png';
import zenzenzenseImage from '../images/songs/Zenzenzense.jpg';
import theNightsImage from '../images/songs/TheNights.jpg';
import testDriveImage from '../images/songs/TestDrive.jpg';

import profilepic from '../images/me.jpg';
import testimonialImage from '../images/Chess2.jpg';
import fuegoleonImage from '../images/quotes/fuegoleon.jpg';
import morganFreemanImage from '../images/quotes/freeman.jpg';
import violetEvergardenImage from '../images/quotes/violet.png';

import Project1Description from '../components/Sections/Portfolio/ProjectDescriptions/RagProject';



import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  AdditionalSkillSection,
  Social,
  TestimonialSection,
  TimelineItem,
  MusicCarouselSection, // Import the new interface
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Eddie's Resume Template",
  description: "React Resume Site",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Music: 'music',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey! I'm Eddie`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100"> Computer Science student</strong> by day, and <strong className="text-stone-100">Data Analyst</strong> by night. 
        I'm currently working and helping faculty with research at <strong className="text-stone-100">Texas A&M University - SA</strong> campus. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you'll see me playing <strong className="text-stone-100">Volleyball</strong>,
        enjoying a <strong className="text-stone-100">Chess</strong> match, or definitely spending time with my{' '}
        <strong className="text-stone-100">5 dogs</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My skills include data analysis, visualization and management. 
  I have experience creating ETL pipelines, Power BI dashboards, and have built a Retrieval Augmented 
  Generation (RAG) systems. I like to think of me as a cheerful individual who enjoys playing volleyball and going to the gym.`,
  aboutItems: [
    {label: 'Location', text: 'San Antonio, Tx', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican', Icon: FlagIcon},
    {label: 'Interests', text: 'Volleyball, Chess, Board Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Texas A&M University - SA', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Title IX Office at TAMUSA', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 2,
      },
    ],
  },
    {
    name: 'Soft',
    skills: [
      {
        name: 'Communication',
        level: 10,
      },
      {
        name: 'Problem Solving',
        level: 9,
      },
      {
        name: 'Enthusiasm',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'C#',
        level: 4,
      },
    ],
  },
  {
    name: 'Data Management',
    skills: [
      {
        name: 'Pandas',
        level: 8,
      },
      {
        name: 'Numpy',
        level: 7,
      },
      {
        name: 'Pytorch',
        level: 3,
      },
    ],
  },

  
];

/**
 * Skill Blocks section
 */
export const additionalSkills: AdditionalSkillSection = {
  title: '',
  skills: [
    { name: 'Python', color: 'bg-green-500' },
    { name: 'Java', color: 'bg-teal-500' },
    { name: 'R', color: 'bg-amber-500' },
    { name: 'Azure Data Factory', color: 'bg-purple-500' },
    { name: 'SQL', color: 'bg-stone-500' },
    { name: 'Docker', color: 'bg-blue-500' },
    { name: 'Microsoft Power BI', color: 'bg-cyan-500' },
    { name: 'Pandas', color: 'bg-red-500' },
    { name: 'Scikit-learn', color: 'bg-orange-600' },
    { name: 'JavaScript', color: 'bg-cyan-400' },
    { name: 'HTML/CSS', color: 'bg-orange-600' },
    { name: 'AWS Lambda', color: 'bg-amber-500' },
    { name: 'S3 Bucket', color: 'bg-slate-400' },
    { name: 'Pinecone', color: 'bg-blue-600' },
    { name: 'Git', color: 'bg-red-700' },
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Retrieval-augmented generation',
    description: 'Python-based RAG app that lets users upload documents and ask questions. The LLM uses the uploaded files as a knowledge base to generate context-aware responses.',
    fullDescription:<Project1Description />,
    slug:'first',
    image: RAG_img,
    images:[RAG_img,estimator_img],
    technologies: ['Python','Pinecone', 'OpenAI','Langchain'],
    repoUrl:'https://github.com/Eddy-y/RAG_PoC_Public'
  },

  {
    title: 'Thunder',
    description: '',
    slug:'Thunder',
    image: thunder2_img,
    noClick: true,
  },

  {
    title: 'Automated Project Estimator',
    description: 'A Streamlit application that uses a fine-tuned OpenAI assistant to generate functional requirements, assisting with project planning.',
    fullDescription:<Project1Description />,
    slug:'Estimator',
    image: estimator_img,
    images:[estimator_img],
    technologies:['Python','Streamlit','OpenAI','Pandas'],
    repoUrl:'https://github.com/Eddy-y/ProjectEstimatorPublic',
  },
  {
    title: 'Chucho',
    description: '',
    slug:'Chucho',
    image: chucho_img,
    noClick: true,
  },
  {
    title: 'Chai',
    description: '',
    slug:'Chai',
    image: chai_img,
    noClick: true,
  },  
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2026',
    location: 'Texas A&M University - SA',
    title: 'Computer Science Bachelors',
    /*content: <p>At TAMUSA, I was a member of the Honors Society and the Chess Club, and I also served as the captain of 
      the men's volleyball team. My time there allowed me to broaden my horizons and explore new technologies and 
      platforms, such as Azure, and dive into new concepts like machine learning.</p>,*/
      content:<p>4.0 GPA | Honors Society | Men's Volleyball Team Captain and Vicepresident | Chess Team Member | Research Assistant</p>,
  },
  {
    date: 'July 2023',
    location: 'Technological University of Leon',
    title: 'Software Development Associate',
    /*content: <p>At the Technological University of Leon, I mainly focused on developing several projects that gave me a
      solid foundation for my understanding of fundamentals like databases and REST controllers, primarily using Java.
      It was here, under the guidance of my ever so feared database professor and her challenging SQL assignments,
      that I discovered my passion for working with data.</p>,*/
      content:<p>3.8 GPA | Men's Volleyball Team Subcaptain | Class Representative</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2024 - Present',
    location: 'Texas A&M University - SA',
    title: 'Title IX Website Manager',
    content: (
      <p>
        Managed and updated office of Title IX website, including processing and reconciling expense reimbursements.
      </p>
    ),
  },
  {
    date: 'January 2024 - July 2024',
    location: 'Forte Innovation Consulting',
    title: 'AI Automation Intern',
    content: (
      <div>
        <ul>
          <li>Built a <strong>Retrieval Augmented Generation (RAG) system</strong> using OpenAI models, <strong> python, Pinecone, and Langchain</strong>. This system automated
          project requirements estimation, which <strong>reduced</strong> the estimation process by <strong>90%</strong> and saved weeks
          in the project flow.</li>
          <li>Developed a <strong>custom AI assistant</strong> using OpenAI models, which provided real-time project updates and
          insights to the team, improving communication and decision-making.</li>
        </ul>
        <p> This work got the initiative to integrate AI into enterprise workflows going, resulting in the company's first successful implementation of AI within project planning.</p>
      </div>
    ),
  },
  {
    date: 'January 2023 - December 2023',
    location: 'Forte Innovation Consulting',
    title: 'Backend Developer Intern',
    content: (
      <div>
        <ul>
          <li>Used machine learning models to generate predictions on machinery failure for a client, and created charts and visualizations to communicate the findings.</li>
          <li>Helped developing a RESTful API for secure digital signature verification, which ensured document integrity.</li>
          <li>Integrated the Interplanetary File System (IPFS) with AWS S3 and Lambda to enable decentralized and permanent file storage for NFT management.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'April 2022 - November 2022',
    location: 'Forte Innovation Consulting',
    title: 'Data Analyst Intern',
    content: (
      <div>
        <ul>
          <li>Automated 5+ ETL pipelines using Azure Data Factory and SQL Server, securing data from diverse sources.</li>
          <li>Created a Power BI dashboard to visualize and analyze data from a client’s database, which helped identify trends and insights.</li>
          <li>Developed and enhanced 10+ Power BI dashboards, providing performance insights into ticket resolution.</li>
        </ul>
      </div>
    ),
  },
  
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Fuegoleon Vermillion',
      text: 'Being weak is nothing to be ashamed of. Staying weak is',
      image: fuegoleonImage,
    },
    {
      name: 'Morgan Freeman',
      text: 'If someone prays for patience, you think God gives them patience? Or does he give them the opportunity to be patient? If he prayed for courage, does God give him courage, or does he give him opportunities to be courageous?',
      image: morganFreemanImage,
    },
    {
      name: 'Violet Evergarden',
      text: 'Dead people receive more flowers than living ones because regret is stronger than gratitude.',
      image: violetEvergardenImage,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to shoot me an email. Lets connect!',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'eduardolh383@gmail.com',
    //   href: 'mailto:eduardolh383@gmail.com',
    // },
    {
      type: ContactType.Location,
      text: 'San Antonio TX, USA',
      href: 'https://www.google.ca/maps/place/San+Antonio,+TX/@29.4241219,-98.4936282,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@eddy_larah',
      href: 'https://www.instagram.com/eddy_larah/',
    },
    {
      type: ContactType.Github,
      text: 'Eddy-y',
      href: 'https://github.com/Eddy-y',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Eddy-y'},
  /*{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},*/
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/eduardo-lara-hurtado-612233281/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/eddy_larah/'},
  /*{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Eddy_larah'},*/
];


/**
 * Music Carousel section
 */
export const musicCarouselData: MusicCarouselSection = {
  title: 'My Favorite Songs',
  songs: [
    {
      name: 'Die With A Smile',
      artist: 'Lady Gaga & Bruno Mars',
      imageSrc: dieWithASmileImage,
      spotifyUrl: 'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=a095e43e64d64a86',
    },
    {
      name: 'The Nights',
      artist: 'Avicii',
      imageSrc: theNightsImage,
      spotifyUrl: 'https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc?si=2b34ffe7cd294e70',
    },
    {
      name: 'Test Drive',
      artist: 'John Powell',
      imageSrc: testDriveImage,
      spotifyUrl: 'https://open.spotify.com/track/2QTDuJIGKUjR7E2Q6KupIh?si=27153db86c8b443e',
    },
    {
      name: 'Zenzenzense',
      artist: 'Radwimps',
      imageSrc: zenzenzenseImage,
      spotifyUrl: 'https://open.spotify.com/track/2DLrgv7HhJanCuD8L9uJLR?si=f89c59f4dba24dcc',
    },
    
  ],
};