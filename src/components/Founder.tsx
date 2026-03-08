import { motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-24 md:py-32 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-dark relative group">
              <img 
                src="https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/63ce2d3b-5e26-48ba-962e-d5c656921f0d.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvNjNjZTJkM2ItNWUyNi00OGJhLTk2MmUtZDVjNjU2OTIxZjBkLmpwZWciLCJpYXQiOjE3NzMwMDY0NjEsImV4cCI6MTgwNDU0MjQ2MX0.jfKa8AnXj27byDTL-WzdwN1MOioarcycjhhlyR1OvbE" 
                alt="Anderson Agüero Lara - Fundador de NUVRO ENGINEER" 
                className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.1] brightness-90 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/10 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              09. Sobre el Fundador
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-white leading-tight mb-4">
              Anderson Agüero Lara
            </h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-platinum/90 font-medium mb-10 text-balance border-l-2 border-brand-accent/50 pl-5 py-1"
            >
              Eres capaz de construir mucho más de lo que imaginas cuando dejas de dudar y empiezas a ejecutar.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-platinum/80 leading-relaxed font-light mb-6"
            >
              Constructor digital enfocado en la ejecución y el criterio técnico. Mi objetivo es ayudar a negocios a verse y operar mejor a través de sistemas web premium.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-platinum/60 leading-relaxed font-light mb-8"
            >
              NUVRO ENGINEER nace de la necesidad de ofrecer soluciones digitales que no solo sean estéticamente superiores, sino que realmente resuelvan problemas comerciales y mejoren la percepción de valor de las marcas.
            </motion.p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-brand-platinum/80">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Basado en Costa Rica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
