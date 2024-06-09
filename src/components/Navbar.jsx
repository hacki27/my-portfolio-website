import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full h-48 p-6 border-r-4 border-gray-900 transform rotate-3 shadow-2xl">
      <div className="bg-white rounded-lg overflow-hidden h-full">
        <img src="profile-picture.jpg" alt="Profile" className="w-full h-32 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-gray-700 text-lg mb-4">Web Developer</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
