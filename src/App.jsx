import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Blog from './components/Blog';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Profile from './components/Profile';

const Home = () => (
  <>
    <Profile />
    <About />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="flex bg-black">
        <Menu />
        
        <div className= "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />

            {/* Nested routes within Portfolio component */}
            <Route path="/portfolio" element={<Portfolio />}>
              {/* Additional nested routes */}
              {/* <Route path="nested-route-1" element={<NestedRoute1Component />} />
              <Route path="nested-route-2" element={<NestedRoute2Component />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
