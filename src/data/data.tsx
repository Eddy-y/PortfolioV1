import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  CodeBracketIcon,
  FireIcon,
  FlagIcon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MailIcon from '../components/Icon/MailIcon';
import BellabeatDescription from '../components/Sections/Portfolio/ProjectDescriptions/BellabeatProject';
import EstimatorDescription from '../components/Sections/Portfolio/ProjectDescriptions/EstimatorProject';
import OptikDescription from '../components/Sections/Portfolio/ProjectDescriptions/OpticProject';
import RAGDescription from '../components/Sections/Portfolio/ProjectDescriptions/RagProject';
import testimonialImage from '../images/Chess2.jpg';
import profilepic from '../images/me.jpg';
import bellabeat_img from '../images/portfolio/Bellabeat.png';
import chai_img from '../images/portfolio/Chai.jpg';
import chucho_img from '../images/portfolio/Chucho.jpg';
import estimator_img from '../images/portfolio/Estimator.png';
import optic_img from '../images/portfolio/Optic.png';
//DISPLAY PROJECT IMAGES
import RAG_img from '../images/portfolio/RAG.png';
import thunder_img from '../images/portfolio/Thunder2.jpg';
import book_img from '../images/Projects/book.png';
//SPECIFIC PROJECT IMAGES
import bookshelf_img from '../images/Projects/bookshelf.png';
import glasses_img from '../images/Projects/Glasses.png';
import watch_img from '../images/Projects/Watch.png';
import ShawnImage from '../images/quotes/Shawn.jpg';
import JosephImage from '../images/quotes/Joseph.jpg';
//import violetEvergardenImage from '../images/quotes/violet.png';
import dieWithASmileImage from '../images/Songs/DieWithASmile.png';
import testDriveImage from '../images/Songs/TestDrive.jpg';
import theNightsImage from '../images/Songs/TheNights.jpg';
import zenzenzenseImage from '../images/Songs/Zenzenzense.jpg';
import aws from '../images/stack/aws.png';
import azure from '../images/stack/azure.png';
import bootstrap from '../images/stack/bootstrap.png';
import c from '../images/stack/c.png';
import css from '../images/stack/css.png';
import docker from '../images/stack/docker.png';
import git from '../images/stack/git.png';
import github from '../images/stack/github.png';
import html from '../images/stack/html.png';
import huggingface from '../images/stack/huggingface.png';
import intellij from '../images/stack/intellij.png';
import java from '../images/stack/java.png';
import javascript from '../images/stack/javascript.png';
import jupyter from '../images/stack/jupyter.png';
import langchain from '../images/stack/langchain.png';
import matplotlib from '../images/stack/matplotlib.png';
import mongodb from '../images/stack/mongodb.png';
import mysql from '../images/stack/mysql.png';
import netbeans from '../images/stack/netbeans.png';
import numpy from '../images/stack/numpy.png';
import openai from '../images/stack/openai.png';
import pandas from '../images/stack/pandas.png';
import pinecone from '../images/stack/pinecone.png';
import postgresql from '../images/stack/postgresql.png';
import postman from '../images/stack/postman.png';
import python from '../images/stack/python.png';
import pytorch from '../images/stack/pytorch.png';
import r from '../images/stack/r.png';
import scikit from '../images/stack/scikit.png';
import sqlserver from '../images/stack/sqlserver.png';
import streamlit from '../images/stack/streamlit.png';
import vscode from '../images/stack/vscode.png';
import heroImage from '../images/VolleyballBack.jpg';
import {
  About,
  AdditionalSkillSection,
  ContactSection,
  ContactType,
  Hero,
  HobbiesSection,
  HomepageMeta,
  MusicCarouselSection,
  PortfolioItem,
  SkillGroup,
  Social,
  StackSection,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Eddie's Portfolio",
  description: 'My Portfolio Site',
};

/**
 * Section definition
 */
export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Stack: 'stack',
  Testimonials: 'testimonials',
  Music: 'music',
  Hobbies: 'hobbies',
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
        A <strong className="text-stone-100"> Computer Science student</strong> by day, and{' '}
        <strong className="text-stone-100">Data Analyst</strong> by night. I'm currently working and helping faculty
        with research at <strong className="text-stone-100">Texas A&M University - SA</strong> campus.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you'll see me playing <strong className="text-stone-100">Volleyball</strong>, enjoying a{' '}
        <strong className="text-stone-100">Chess</strong> match, or definitely spending time with my{' '}
        <strong className="text-stone-100">5 dogs</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/EduardoLara_Resume.pdf',
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
  description: `Computer Science student who’s passionate about software development and data analysis, 
  I'm always looking for a way to make sense of what doesn't, seeking constantly that feeling of going “Ohhh now it makes sense”. 
  When I'm not working with data, you can find me playing volleyball or chess!`,

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
    {name: 'Python', color: 'bg-green-500'},
    {name: 'Java', color: 'bg-teal-500'},
    {name: 'R', color: 'bg-amber-500'},
    {name: 'Azure Data Factory', color: 'bg-purple-500'},
    {name: 'SQL', color: 'bg-stone-500'},
    {name: 'Docker', color: 'bg-blue-500'},
    {name: 'Microsoft Power BI', color: 'bg-cyan-500'},
    {name: 'Pandas', color: 'bg-red-500'},
    {name: 'Scikit-learn', color: 'bg-orange-600'},
    {name: 'JavaScript', color: 'bg-cyan-400'},
    {name: 'HTML/CSS', color: 'bg-orange-600'},
    {name: 'AWS Lambda', color: 'bg-amber-500'},
    {name: 'S3 Bucket', color: 'bg-slate-400'},
    {name: 'Pinecone', color: 'bg-blue-600'},
    {name: 'Git', color: 'bg-red-700'},
  ],
};

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
    content: (
      <p>
        4.0 GPA | Honors Society | Men's Volleyball Team Captain and Vicepresident | Chess Team Member | Research
        Assistant
      </p>
    ),
  },
  {
    date: 'July 2023',
    location: 'Technological University of Leon',
    title: 'Software Development Associate',
    /*content: <p>At the Technological University of Leon, I mainly focused on developing several projects that gave me a
      solid foundation for my understanding of fundamentals like databases and REST controllers, primarily using Java.
      It was here, under the guidance of my ever so feared database professor and her challenging SQL assignments,
      that I discovered my passion for working with data.</p>,*/
    content: <p>3.8 GPA | Men's Volleyball Team Subcaptain | Class Representative</p>,
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
          <li>
            Built a <strong>Retrieval Augmented Generation (RAG) system</strong> using OpenAI models,{' '}
            <strong> python, Pinecone, and Langchain</strong>. This system automated project requirements estimation,
            which <strong>reduced</strong> the estimation process by <strong>90%</strong> and saved weeks in the project
            flow.
          </li>
          <li>
            Developed a <strong>custom AI assistant</strong> using OpenAI models, which provided real-time project
            updates and insights to the team, improving communication and decision-making.
          </li>
        </ul>
        <p>
          {' '}
          This work got the initiative to integrate AI into enterprise workflows going, resulting in the company's first
          successful implementation of AI within project planning.
        </p>
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
          <li>
            Used machine learning models to generate predictions on machinery failure for a client, and created charts
            and visualizations to communicate the findings.
          </li>
          <li>
            Helped developing a RESTful API for secure digital signature verification, which ensured document integrity.
          </li>
          <li>
            Integrated the Interplanetary File System (IPFS) with AWS S3 and Lambda to enable decentralized and
            permanent file storage for NFT management.
          </li>
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
          <li>
            Automated 5+ ETL pipelines using Azure Data Factory and SQL Server, securing data from diverse sources.
          </li>
          <li>
            Created a Power BI dashboard to visualize and analyze data from a client’s database, which helped identify
            trends and insights.
          </li>
          <li>
            Developed and enhanced 10+ Power BI dashboards, providing performance insights into ticket resolution.
          </li>
        </ul>
      </div>
    ),
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Retrieval-augmented generation',
    description:
      'Python-based RAG app that lets users upload documents and ask questions. The LLM uses the uploaded files as a knowledge base to generate context-aware responses.',
    fullDescription: <RAGDescription />,
    slug: 'Rag',
    image: RAG_img,
    images: [bookshelf_img],
    technologies: ['Python', 'Pinecone', 'OpenAI', 'Langchain'],
    repoUrl: 'https://github.com/Eddy-y/RAG_PoC_Public',
    year: '2024',
  },

  {
    title: 'Thunder',
    description: '',
    slug: 'Thunder',
    image: thunder_img,
    noClick: true,
  },

  {
    title: 'Automated Project Estimator',
    description:
      'A Streamlit application that uses a fine-tuned OpenAI assistant to generate functional requirements, assisting with project planning.',
    fullDescription: <EstimatorDescription />,
    slug: 'Estimator',
    image: estimator_img,
    images: [book_img],
    technologies: ['Python', 'Streamlit', 'OpenAI', 'Pandas'],
    repoUrl: 'https://github.com/Eddy-y/ProjectEstimatorPublic',
    year: '2024',
  },
  {
    title: 'Chucho',
    description: '',
    slug: 'Chucho',
    image: chucho_img,
    noClick: true,
  },
  {
    title: 'Optica-Qualite System',
    description:
      'Data management platform that allows employees to manage client data, product inventory, sales, and payments efficiently.',
    fullDescription: <OptikDescription />,
    slug: 'Optik',
    image: optic_img,
    images: [glasses_img],
    technologies: ['Html', 'Java', 'MySQL', 'Javascript'],
    repoUrl: 'https://github.com/Eddy-y/optik.git',
    year: '2023',
  },
  {
    title: 'Chai',
    description: '',
    slug: 'Chai',
    image: chai_img,
    noClick: true,
  },
  {
    title: 'Bellabeat Study Case',
    description: "Data analysis of smart device usage to inform Bellabeat's marketing strategy.",
    fullDescription: <BellabeatDescription />,
    slug: 'Bellabeat',
    image: bellabeat_img,
    images: [watch_img],
    technologies: ['R', 'Tidyverse', 'ggplot2', 'Data'],
    repoUrl: 'https://www.kaggle.com/code/eduardolarahurtado/bellabeat-s-study-case',
    year: '2023',
  },
];

/**
 * Stack section
 */
export const stackSection: StackSection = {
  title: 'Tech Stack',
  groups: [
    {
      name: 'Programming Languages',
      items: [
        {name: 'Python', imageSrc: python},
        {name: 'C#', imageSrc: c},
        {name: 'JavaScript', imageSrc: javascript},
        {name: 'Java', imageSrc: java},
        {name: 'R', imageSrc: r},
      ],
    },
    {
      name: 'Web & API Development',
      items: [
        {name: 'HTML', imageSrc: html},
        {name: 'CSS', imageSrc: css},
        {name: 'Bootstrap', imageSrc: bootstrap},
      ],
    },
    {
      name: 'AI & Data Science',
      items: [
        {name: 'Pinecone', imageSrc: pinecone},
        {name: 'PyTorch', imageSrc: pytorch},
        {name: 'Pandas', imageSrc: pandas},
        {name: 'Numpy', imageSrc: numpy},
        {name: 'Matplotlib', imageSrc: matplotlib},
        {name: 'Streamlit', imageSrc: streamlit},
        {name: 'Jupyter', imageSrc: jupyter},
        {name: 'Scikit-learn', imageSrc: scikit},
      ],
    },
    {
      name: 'Databases',
      items: [
        {name: 'SQL Server', imageSrc: sqlserver},
        {name: 'PostgreSQL', imageSrc: postgresql},
        {name: 'MySQL', imageSrc: mysql},
        {name: 'MongoDB', imageSrc: mongodb},
      ],
    },
    {
      name: 'Developer Tools',
      items: [
        {name: 'Git', imageSrc: git},
        {name: 'Visual Studio Code', imageSrc: vscode},
        {name: 'Github', imageSrc: github},
        {name: 'Postman', imageSrc: postman},
        {name: 'IntelliJIdea', imageSrc: intellij},
        {name: 'Netbeans', imageSrc: netbeans},
      ],
    },
    {
      name: 'DevOps & Cloud',
      items: [
        {name: 'Azure', imageSrc: azure},
        {name: 'Docker', imageSrc: docker},
        {name: 'AWS', imageSrc: aws},
      ],
    },
    {
      name: 'LLMs & MLOps',
      items: [
        {name: 'OpenAI API', imageSrc: openai},
        {name: 'LangChain', imageSrc: langchain},
        {name: 'HuggingFace', imageSrc: huggingface},
      ],
    },
  ],
};

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Joseph Mumanga  | Innovation & Research Director',
      text: 'I have no doubt that he will bring the same level of dedication and innovation to any academic or professional endeavor he chooses to pursue.',
      image: JosephImage,
    },
    {
      name: 'Shawn Hamilton | Managing Principal',
      text: 'Communication was effortless from start to finish. I never had to chase for an update on the building of the site. It was a completely stress-free experience.',
      image: ShawnImage,
    },
    // {
    //   name: 'Violet Evergarden',
    //   text: 'Dead people receive more flowers than living ones because regret is stronger than gratitude.',
    //   image: violetEvergardenImage,
    // },
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
  {label: 'Email', Icon: MailIcon, href: 'mailto:eduardolh383@gmail.com'},
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

export const hobbiesData: HobbiesSection = {
  title: 'Hobbies',
  items: [
    {
      title: 'Chess',
      description: 'Love strategy and mind-burner games',
      Icon: PuzzlePieceIcon,
    },
    {
      title: 'Volleyball',
      description: 'Getting to enjoy and compete in volleyball',
      Icon: UsersIcon,
    },
    {
      title: 'Weightlifting',
      description: 'Enjoy a good pump. Man move heavy circle, man Happy',
      Icon: FireIcon,
    },
    {
      title: 'Board Games',
      description: 'Many good stories, moments and laughs with friends',
      Icon: UsersIcon,
    },
    {
      title: 'Coding Challenges',
      description: 'Getting to tap into the flow and create new things',
      Icon: CodeBracketIcon,
    },
    {
      title: 'Traveling',
      description: 'Little cliche but always fun with the right people',
      Icon: GlobeAsiaAustraliaIcon,
    },
  ],
};
