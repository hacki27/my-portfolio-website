import React from 'react';

const Header = () => {
  return (
    <header className="py-4 relative">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Kiran Wagh</div>
      <nav>
        <div 
          className="menu-bg border border-black rounded-3xl absolute"
          style={{
            width: '1178px',
            height: '2177.15px',
            left: 'calc(50% - (1178px/2) - 53px)',
            top: '64px',
            backgroundImage: 'url(home.jpg)',
            boxSizing: 'border-box',
          }}
        >
          <a href="#education" className="hover:text-gray-300 px-4 py-2">education</a>
          <a href="#experience" className="hover:text-gray-300 px-4 py-2">experience</a>
          <a href="https://github.com" className="hover:text-gray-300 px-4 py-2">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-gray-300 px-4 py-2">LinkedIn</a>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;
