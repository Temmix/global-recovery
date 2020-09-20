import React from 'react';
import './App.css';
import About from './app/components/about';
import Contact from './app/components/contact';
import Client from './app/components/client';
import FifthModal from './app/components/fifthModal';
import FirstModal from './app/components/firstModal';
import Footer from './app/components/footer';
import FourthModal from './app/components/fourthModal';
import MastHead from './app/components/masthead';
import NavBar from './app/components/navbar';
import SecondModal from './app/components/secondModal';
import Services from './app/components/services';
import SixthModal from './app/components/sixthModal';
import ThirdModal from './app/components/thirdModal';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MastHead />
      <Services />
      <About />
      <Client />
      <Contact />
      <Footer />
      <FirstModal />
      <SecondModal />
      <ThirdModal />
      <FourthModal />
      <FifthModal />
      <SixthModal />
    </div>
  );
}

export default App;
