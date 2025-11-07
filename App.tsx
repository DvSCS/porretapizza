import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { PIZZA_MENU } from './constants';
import BottomNavBar from './components/BottomNavBar';

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu menu={PIZZA_MENU} />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNavBar />
    </>
  );
};

export default App;