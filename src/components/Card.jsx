import React from 'react';

const Card = ({ title, description, imageUrl, githubUrl, liveDemoUrl }) => {
  return (
    <div className="bg-[#0d1117] border border-[#30363d] max-w-xs rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 ">
        <h3 className="text-xl font-semibold mb-2 text-orange-500">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            GitHub
          </a>
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;