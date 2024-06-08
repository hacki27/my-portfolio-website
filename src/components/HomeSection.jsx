import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold">Hi, I'm Lucas</h1>
      <p className="text-lg my-4 max-w-2xl">
        During these 4 years as Front-End Software Engineer. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.
      </p>
      <div className="flex space-x-4 my-4">
        <button className="bg-white text-black px-4 py-2 rounded">Download CV</button>
        <button className="bg-transparent border border-white px-4 py-2 rounded">See experiences</button>
      </div>
      <div className="mt-10 flex space-x-4">
        <div className="bg-gray-700 p-4 rounded">
          <p className="text-2xl font-bold">4 years of XP</p>
          <p className="text-gray-400">with the most popular ecosystem frontend</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <p className="text-2xl font-bold">JavaScript</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <p className="text-2xl font-bold">React</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <p className="text-2xl font-bold">Next.js</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
