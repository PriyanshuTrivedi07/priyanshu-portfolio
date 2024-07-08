import React from 'react';
import { Container } from '../index';
const Footer = () => {
  return (
    <footer className=" text-white py-4 bg-[#8a542f47] shadow-lg">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p>Design and Developed by <span className='text-orange-500 font-semibold'>Priyanshu Trivedi</span></p>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.linkedin.com/in/priyanshu-trivedi/" target='_blank' className="w-8 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="LinkedIn">
              <img
                loading='lazy'
                src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/LinkedIn.svg`}
                alt='linkedin' />
            </a>

            <a href="https://github.com/PriyanshuTrivedi07" target='_blank' className="w-8 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="GitHub">
              <img
                className=""
                loading='lazy'
                src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg`}
                alt='github' />
            </a>

            <a href="mailto:priyanshutrivedi0081@gmail.com" target='_blank' className="w-8 transition-all duration-300 hover:-translate-y-3 hover:scale-110" aria-label="Email">
              <img
                className=""
                loading='lazy'
                src={`https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Gmail-Dark.svg`}
                alt='github' />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Priyanshu Trivedi</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;