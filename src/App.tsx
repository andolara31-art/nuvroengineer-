import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diagnosis from './components/Diagnosis';
import NuvroExpress from './components/NuvroExpress';
import Landings from './components/Landings';
import Demos from './components/Demos';
import NuvroCustom from './components/NuvroCustom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { CSSProperties } from 'react';

function SectionDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div
      className={`section-divider ${flip ? 'is-flipped' : ''}`}
      style={{ '--divider-from': from } as CSSProperties}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path d="M0 0H1440V96H0L0 62L520 24L980 70L1440 28V0Z" fill={to} />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#0066FF] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider from="#02050a" to="#f2f6fb" />
        <Diagnosis />
        <SectionDivider from="#f2f6fb" to="#F5F7FA" flip />
        <Projects />
        <SectionDivider from="#F5F7FA" to="#fbfcff" />
        <NuvroExpress />
        <SectionDivider from="#fbfcff" to="#050505" flip />
        <Landings />
        <SectionDivider from="#050505" to="#F9FAFB" />
        <Demos />
        <SectionDivider from="#F9FAFB" to="#02050a" flip />
        <NuvroCustom />
        <SectionDivider from="#02050a" to="#000000" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
