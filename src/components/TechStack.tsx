import { motion } from 'motion/react';

const tools = [
  'React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Google AI Studio', 'Claude', 'Vercel', 'Firebase', 'n8n'
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase">
            10. Stack & Herramientas
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="px-6 py-3 rounded-full border border-white/10 bg-brand-black text-brand-platinum/70 font-medium hover:text-brand-white hover:border-brand-accent/50 transition-colors cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
