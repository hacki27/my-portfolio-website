import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaFileDownload  } from 'react-icons/fa';
import { HERO_CONTENT } from '../constants';
import  user from "../assets/user.png"
const HeroSection = () => {
  return (
  <div className='border-b  border-neutral-700  pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center bg-slate-900 justify-between animate-farmers'>
        <div className='flex flex-col items-center lg:items-start text-white lg:w-1/2'>
          <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Kiran Waghmare</h1>
          <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-900 via-slate-500 to-purple-500 bg-clip-text text-transparent">
      DevOps Engineer
    </span>
    
    <p className="p-6 text-lg leading-relaxed  ">
      {HERO_CONTENT}
    </p>
          <button className=" hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-4 flex items-center gap-2">
            <FaFileDownload />
            Download Resume
          </button>
        </div>
        <div className='flex items-center lg:w-1/2 justify-end'>
          <div>
            <img src={user} alt='User' className='w-100 h-50 -full overflow-hidden mr-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
