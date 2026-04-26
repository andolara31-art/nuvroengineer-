import { motion } from 'motion/react';

export default function Founder() {
  return (
    <section className="py-24 md:py-32 bg-brand-black/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-dark/50 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent animate-pulse" />
              <img 
                src="https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/nv/hf_20260326_192810_29431f91-08f5-4a98-952e-964a99307e80%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJudi9oZl8yMDI2MDMyNl8xOTI4MTBfMjk0MzFmOTEtMDhmNS00YTk4LTk1MmUtOTY0YTk5MzA3ZTgwICgxKS5wbmciLCJpYXQiOjE3NzU5ODYxODIsImV4cCI6MTgwNzUyMjE4Mn0.nmCRljTgHh-PAtusyBD_IlaKjMEn3TiEUc6Ul7y7S7I" 
                alt="Anderson Agüero Lara - Fundador de NUVRO ENGINEER" 
                className="w-full h-full object-cover object-top grayscale-[30%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 relative z-10"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-brand-platinum/20 font-display font-medium text-4xl uppercase px-12 text-center leading-none tracking-tighter">
                 Anderson Agüero
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-20" />
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-sm font-mono tracking-widest text-brand-platinum/50 uppercase mb-4">
              07. Detrás de la firma
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-brand-white leading-tight mb-8">
              Anderson Agüero Lara
            </h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-platinum/80 leading-relaxed font-light mb-6"
            >
              Soy ingeniero de software y diseñador enfocado en resultados. Fundé Nuvro Engineer al ver cómo negocios excelentes perdían clientes por culpa de webs genéricas y procesos manuales.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-platinum/80 leading-relaxed font-light mb-10"
            >
              Mi objetivo es traducir tu experiencia y calidad en un sistema digital que comunique autoridad, genere confianza y cierre más ventas de forma automática.
            </motion.p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-brand-platinum/80">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Basado en Costa Rica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
