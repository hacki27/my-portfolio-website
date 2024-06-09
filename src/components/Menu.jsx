import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faFolderOpen, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import user from '../assets/user.png';

const Menu = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    setDarkMode(!darkMode);

    // Toggle dark mode classes on the body element
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-full w-64 p-6 border-r-4 border-gray-900 rounded-lg fixed top-0 left-0 shadow-2xl">
      <nav className="flex flex-col items-center text-white">
        <Link to="/" className="mb-6">
          <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
            {/* Profile picture goes here */}
            <img src={user} alt="Profile" className="rounded-full h-20 w-20" />
          </div>
        </Link>
        <div className="w-full flex flex-col items-center gap-6">
          <Link to="/about" className="w-full">
            <button className="bg-gray-700 hover:bg-gray-600 py-6 px-6 rounded-lg w-full flex flex-col items-center justify-center gap-2 shadow-md">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <span className="text-sm">About Me</span>
            </button>
          </Link>
          <Link to="/resume" className="w-full">
            <button className="bg-gray-700 hover:bg-gray-600 py-6 px-6 rounded-lg w-full flex flex-col items-center justify-center gap-2 shadow-md">
              <FontAwesomeIcon icon={faFileAlt} size="lg" />
              <span className="text-sm">Resume</span>
            </button>
          </Link>
          <Link to="/portfolio" className="w-full">
            <button className="bg-gray-700 hover:bg-gray-600 py-6 px-6 rounded-lg w-full flex flex-col items-center justify-center gap-2 shadow-md">
              <FontAwesomeIcon icon={faFolderOpen} size="lg" />
              <span className="text-sm">Portfolio</span>
            </button>
          </Link>
          <Link to="/blog" className="w-full">
            <button className="bg-gray-700 hover:bg-gray-600 py-6 px-6 rounded-lg w-full flex flex-col items-center justify-center gap-2 shadow-md">
              <FontAwesomeIcon icon={faBlog} size="lg" />
              <span className="text-sm">Blog</span>
            </button>
          </Link>
          <Link to="/contact" className="w-full">
            <button className="bg-gray-700 hover:bg-gray-600 py-6 px-6 rounded-lg w-full flex flex-col items-center justify-center gap-2 shadow-md">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span className="text-sm">Contact</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
