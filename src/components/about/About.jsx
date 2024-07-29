import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Container } from '../index'
import codingImage from '../../assets/about.svg';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNode, FaJava , FaBootstrap } from 'react-icons/fa';
// import { VscVscode } from "react-icons/vsc";
// import { SiTailwindcss, SiCplusplus, SiC, SiAppwrite, SiRedux } from 'react-icons/si';
import { Helmet } from 'react-helmet';

const About = () => {
  const skills = [
    // { name: 'React', icon: FaReact, color: '#61DAFB' },
    // { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    // { name: 'Java', icon: FaJava, color: '#f58219' },
    // { name: 'C', icon: SiC, color: '#394aab' },
    // { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    // { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    // { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    // { name: 'BootStrap', icon: FaBootstrap, color: '#38B2AC' },
    // { name: 'Redux', icon: SiRedux , color: '#764abc' },
    // { name: 'Appwrite', icon: SiAppwrite , color: '#f02e65' },
    // { name: 'Git', icon: FaGitAlt , color: '#F05032' },
    // { name: 'GitHub', icon: FaGithub, color: '#fff' },
    // { name: 'VS Code', icon: VscVscode, color: '#3c99d4' },

    { name: 'React', icon: 'React-Dark.svg' },
    { name: 'JavaScript', icon: 'JavaScript.svg' },
    { name: 'Vite', icon: 'Vite-Dark.svg' },
    { name: 'Appwrite', icon: 'Appwrite.svg' },
    { name: 'Redux', icon: 'Redux.svg' },
    { name: 'Tailwind', icon: 'TailwindCSS-Dark.svg' },
    { name: 'BootStrap', icon: 'Bootstrap.svg' },
    { name: 'HTML5', icon: 'HTML.svg' },
    { name: 'CSS3', icon: 'CSS.svg' },
    { name: 'Git', icon: 'Git.svg' },
    { name: 'Github', icon: 'Github-Dark.svg' },
    { name: 'C', icon: 'C.svg' },
    { name: 'Java', icon: 'Java-Dark.svg' },
    { name: 'VS Code', icon: 'VSCode-Dark.svg' },
  ];

  return (
    <div className='text-white py-8 my-8'>

      <Helmet>
        <title>About Me | Priyanshu Trivedi</title>
        <meta name="description" content="Learn more about me, my skills, and view my GitHub contribution graph. I'm Priyanshu Trivedi, a front-end developer with expertise handson experience in React and modern web technologies." />
        <meta name="keywords" content="about me, front-end developer, React, JavaScript, skills, GitHub contributions, priyanshu trivedi, priyanshutrivedi, priyanshutrivedi.vercel.app priyanshu-portfolio" />

        <meta property="og:title" content="About Me | Priyanshu Trivedi" />
        <meta property="og:description" content="Learn more about me, my skills, and view my GitHub contribution graph. I'm Priyanshu Trivedi, a front-end developer with expertise handson experience in React and modern web technologies." />
        <meta property="og:image" content="https://priyanshutrivedi.vercel.app/assets/about-CVj-9Jni.svg" />
        <meta property="og:url" content="https://priyanshutrivedi.vercel.app/about" />

        <meta name="twitter:title" content="About Me | Priyanshu Trivedi" />
        <meta name="twitter:description" content="Learn more about me, my skills, and view my GitHub contribution graph. I'm Priyanshu Trivedi, a front-end developer with expertise handson experience in React and modern web technologies." />
        <meta name="twitter:image" content="https://priyanshutrivedi.vercel.app/assets/about-CVj-9Jni.svg" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://priyanshutrivedi.vercel.app/about" />
      </Helmet>

      <Container>
        {/* About Me Section */}
        <section className="mb-8 flex flex-col md:flex-row gap-4 py-8">
          <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 text-white">
            <h2 className="text-3xl md:text-4xl mb-4 ">Let me <span className='text-orange-500'>Introduce</span> myself</h2>
            <p className='md:text-xl'>
              I am a B.Sc. (C.S.) Graduate aspiring to be a front-end developer. I have achieved 4⭐ in C & Java @Hackerrank and I am skilled in React, JavaScript, HTML5, CSS3, Tailwind, Bootstrap, Redux Toolkit, Appwrite, familiar with Git & GitHub, and a photography enthusiast skilled in Lightroom retouching.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center md:justify-end">
            <img
              src={codingImage}
              alt="Coding"
              className="w-3/4 md:w-full max-w-md"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 flex flex-col gap-4 py-8">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap md:justify-evenly gap-2">
            {/* {skills.map(skill => (
            <div key={skill.name} className="flex items-center justify-center">
              <skill.icon className="text-5xl transition-all duration-300 hover:-translate-y-3 hover:scale-150" style={{ color: skill.color }} />
            </div>
          ))} */}
            {/* <img src="" alt="" /> */}
            {skills.map(skill => (
              <div key={skill.name} className="flex items-center justify-center w-12">
                <img
                  className="transition-all duration-300 hover:-translate-y-3 hover:scale-110"
                  src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/${skill.icon}`}
                  alt={skill.name} />
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Contribution Graph Section */}
        <section className='mb-8 flex flex-col gap-4 py-8'>
          <h2 className="text-3xl font-bold mb-4">GitHub Contribution</h2>
          <div className="flex justify-center">
            <GitHubCalendar username="PriyanshuTrivedi07" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;