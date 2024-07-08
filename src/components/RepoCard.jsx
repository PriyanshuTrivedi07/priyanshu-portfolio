import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="bg-[#0d1117] flex flex-col justify-between gap-3 text-gray-400 border border-[#30363d] rounded-md shadow-lg p-4 transform transition-transform duration-500 hover:shadow-xl">
      <div className='flex flex-col gap-3'>
        <div className='text-white flex gap-2 items-center text-sm'>
          <div className='text-white'>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill='gray' className="text-white mr-1">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
          </div>
          <a href={repo.html_url} className='text-orange-400 font-semibold hover:text-orange-500 hover:underline'>{repo.name}</a>
          <span className='border border-[#30363d] rounded-full px-2 text-gray-400'>{repo.visibility}</span>
        </div>

        <div>
          <p className='text-xs'>{repo.description}</p>
        </div>

      </div>
      <div className='flex gap-2 items-center'>
        <div className='w-3 h-3 bg-orange-800 rounded-full'></div>
        <p className='text-xs'>{repo.language}</p>
      </div>


    </div>
  );
};

export default RepoCard;