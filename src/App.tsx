/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBrand from './components/AboutBrand';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import TargetAudience from './components/TargetAudience';
import BeforeAfter from './components/BeforeAfter';
import Projects from './components/Projects';
import Automation from './components/Automation';
import Process from './components/Process';
import Founder from './components/Founder';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-platinum font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutBrand />
        <Services />
        <ValueProposition />
        <TargetAudience />
        <BeforeAfter />
        <Projects />
        <Automation />
        <Process />
        <Founder />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
