import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <aside className="text-white flex flex-col gap-4">

      <div className='w-full text-start flex items-center md:flex-col flex-row'>
        <img src={user.avatar_url} alt="User Avatar" className="w-32 h-32 md:w-full md:h-full rounded-full mx-auto" />
        <div className='w-full px-4 md:px-0 md:pt-4'>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className='text-xl text-gray-500'>{user.login}</p>
        </div>
      </div>

      <p className="font-light">{user.bio}</p>

      <a href={user.html_url} target='_blank' className='bg-[#21262d] hover:bg-[#232830] border border-[#30363d] w-full text-center py-1 px-4 rounded-md'>View Profile</a>

      <div className="">
        <p className='text-gray-500 text-sm'><span className='text-white'>{user.followers}</span> followers • <span className='text-white'>{user.following}</span> following</p>
      </div>
    </aside>
  );
};

export default UserInfo;