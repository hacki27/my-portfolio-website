import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <HomeSection />
      </main>
    </div>
  );
}

export default App;
