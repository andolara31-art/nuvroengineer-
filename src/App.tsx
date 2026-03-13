/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import PaymentMethods from './components/PaymentMethods';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-brand-platinum font-sans selection:bg-brand-accent selection:text-brand-white">
      <div className="mesh-bg"></div>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Projects />
        <Testimonials />
        <Process />
        <Pricing />
        <PaymentMethods />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
