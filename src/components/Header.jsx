import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">lucasviga</div>
        <nav className="space-x-4">
          <a href="#education" className="hover:text-gray-300">education</a>
          <a href="#experience" className="hover:text-gray-300">experience</a>
          <a href="https://github.com" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
