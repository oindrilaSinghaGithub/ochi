import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/about';
import Eyes from './components/eyes';
 import LocomotiveScroll from 'locomotive-scroll';

function App() {
 

 const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
   <Navbar />
   <LandingPage />
   <Marquee />
   <About />
   <Eyes />
    </div>
  )
}

export default App