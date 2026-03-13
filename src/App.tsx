/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Projects from './components/Projects';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-brand-platinum font-sans selection:bg-brand-accent selection:text-brand-black">
      <div className="mesh-bg"></div>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Projects />
        <Process />
        <Pricing />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
