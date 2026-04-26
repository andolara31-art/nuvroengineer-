/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NuvroExpress from './components/NuvroExpress';
import BusinessSelector from './components/BusinessSelector';
import Comparison from './components/Comparison';
import ExpressPackages from './components/ExpressPackages';
import DemoWall from './components/DemoWall';
import NuvroCustom from './components/NuvroCustom';
import Projects from './components/Projects';
import Process from './components/Process';
import Founder from './components/Founder';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-brand-platinum font-sans selection:bg-brand-accent selection:text-brand-white">
      <div className="mesh-bg"></div>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <NuvroExpress />
        <BusinessSelector />
        <Comparison />
        <ExpressPackages />
        <DemoWall />
        <NuvroCustom />
        <Projects />
        <Process />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

