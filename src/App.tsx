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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#D7FF45] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <Diagnosis />
        <Projects />
        <NuvroExpress />
        <Landings />
        <Demos />
        <NuvroCustom />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
