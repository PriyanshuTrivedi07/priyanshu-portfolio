import React from 'react';
import { Card, Container } from "../index";
import BlogverseImg from "../../assets/BlogverseSS.png"
import todogenieImg from "../../assets/todogenieSS.png"
import newssyncImg from "../../assets/newssync.png"
import miniJsImg from "../../assets/miniSS.png"
import cwhImg from "../../assets/cwhSS.png"


const Projects = () => {

  const projects = [
    {
      title: 'Blog Verse',
      description: 'BlogVerse is a web application built with React for sharing and reading blog posts. It provides a seamless user experience with features like user authentication, dynamic content creation, and responsive UI design.',
      imageUrl: BlogverseImg,
      githubUrl: 'https://github.com/PriyanshuTrivedi07/BlogVerse',
      liveDemoUrl: 'https://blogwritting.vercel.app/signup',
    },
    {
      title: 'TodoGenie',
      description: 'A responsive Todo List web application developed using React.js and Tailwind CSS. This application allows users to add, delete, and update tasks, enhancing productivity and ensuring efficient task management.',
      imageUrl: todogenieImg,
      githubUrl: 'https://github.com/PriyanshuTrivedi07/TodoApp',
      liveDemoUrl: 'https://todogenie.vercel.app/',
    },
    {
      title: 'NewsSync',
      description: 'NewsSync is a web application that delivers real-time news headlines fetched from various sources using a news API. Built with HTML, CSS, and JavaScript, this app provides a seamless and engaging experience for staying updated with the latest news.',
      imageUrl: newssyncImg,
      githubUrl: 'https://github.com/PriyanshuTrivedi07/NewsSync',
      liveDemoUrl: 'https://priyanshutrivedi07.github.io/NewsSync/',
    },
    {
      title: 'Js-MiniProjects',
      description: 'This website consists of some Mini Projects built with HTML, CSS and Javascript to practice developement',
      imageUrl: miniJsImg,
      githubUrl: 'https://github.com/PriyanshuTrivedi07/JS-Mini-Projects',
      liveDemoUrl: 'https://priyanshutrivedi07.github.io/JS-Mini-Projects/',
    },
    {
      title: 'CodeWithHarry UI clone',
      description: "a clone of the homepage of CodeWithHarry's website. CodeWithHarry is a popular YouTube channel and online learning platform that provides programming tutorials and courses. This clone was built using HTML and CSS to replicate the look and feel of the original website's homepage.",
      imageUrl: cwhImg,
      githubUrl: 'https://github.com/PriyanshuTrivedi07/CodeWithHarry-Clone',
      liveDemoUrl: 'https://priyanshutrivedi07.github.io/CodeWithHarry-Clone/',
    },
    // Add more projects as needed
  ];



  return (
    <div className="py-8 my-8">
      <Container>
        <h2 className="text-4xl md:text-5xl text-orange-500 text-center mb-8">My Recent Works</h2>
        <div className="grid grid-cols-1 place-items-center items-start sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveDemoUrl={project.liveDemoUrl}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;