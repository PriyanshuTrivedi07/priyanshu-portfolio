import React from 'react';
import { Container } from '../index';
import resume from "../../assets/Priyanshu_resume.pdf"
import welcomeImage from '../../assets/home.svg'; // Ensure you have an image in this path
import connectImage from '../../assets/connect.svg'; // Ensure you have an image in this path

const HomePage = () => {
  return (
    <main className=" py-8 my-8">
      <Container>
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 py-20 rounded-lg mb-16 min-h-[30rem]">
          <div className="w-full md:w-[60%] flex flex-col justify-center gap-4 text-white">
            <span className='text-3xl md:text-4xl font-medium'>Hello ! 👋🏻</span>
            <h1 className="text-4xl md:text-5xl">
              I'm <span className="text-orange-500 font-semibold">Priyanshu Trivedi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4">Front-End Developer</h2>
            <div className='flex items-center'>

              <a
                role='button'
                href={resume}
                className="bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
                download='Priyanshu_Resume.pdf'
              >
                <i className="fa-solid fa-file-arrow-down mr-2"></i> Download Resume
              </a>
            </div>
          </div>

          <div className="w-full md:w-[40%] flex justify-center items-center md:justify-end">
            <img
              src={welcomeImage}
              alt="Coding"
              className="w-full max-w-md"
            />
          </div>
        </section>

        <section className="flex my-12 flex-col md:flex-row-reverse  items-center gap-8 h-[30rem]">

          <div className="w-full md:w-[60%] flex flex-col justify-center items-center sm:items-start gap-4 text-white">
            <h2 className="text-4xl md:text-5xl text-orange-500">Let's Connect!</h2>
            <p className="">I'd love to hear from you! Feel free to reach out to me through any of the platforms below.</p>
            <div className="flex justify-start space-x-2">

              <a href="https://www.linkedin.com/in/priyanshu-trivedi/" target='_blank' className="w-12 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="LinkedIn">
                <img
                  src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/LinkedIn.svg`}
                  alt='linkedin' />
              </a>

              <a href="https://github.com/PriyanshuTrivedi07" target='_blank' className="w-12 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="GitHub">
                <img
                  className=""
                  src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg`}
                  alt='github' />
              </a>

              <a href="mailto:priyanshutrivedi0081@gmail.com" target='_blank' className="w-12 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="Email">
                <img
                  className=""
                  src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Gmail-Dark.svg`}
                  alt='github' />
              </a>

            </div>
          </div>

          <div className="w-full md:w-[40%] flex justify-center md:justify-end">
            <img
              src={connectImage}
              alt="Coding"
              className="w-full max-w-md"
            />
          </div>

        </section>
      </Container>
    </main>
  );
};

export default HomePage;