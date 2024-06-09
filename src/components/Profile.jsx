import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Technologies from './Technologies';
import Designer from '../assets/Designer.jpeg';
import About from './About';

const Profile = () => {
  return (
    <div className="bg-gradient-to-b ml-10 from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex overflow-hidden items-center">
          <img
            src={Designer}
            alt="Profile"
            className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover ml-6 mr-4"
          />
          <div>
            <h1 className="text-xl md:text-3xl font-bold">Kiran Waghmare</h1>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-900 via-slate-500 to-purple-500 bg-clip-text text-transparent">
     Cloud   | DevOps Engineer
    </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:waghmarek749@gmail.com" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className="text-gray-400">|</p>
          <a href="https://www.linkedin.com/in/kiran-waghmare-0470741b2/" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            CV Download
          </a>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
        <Technologies />


        </div>
      </div>
    </div>
  );
};

export default Profile;
