import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ingredients = [
  { name: 'Brioche Ekmeği', desc: 'Günlük taze pişirilen özel brioche', icon: '🍞' },
  { name: 'Angus Eti', desc: '180 günlük tahıl beslemeli premium Angus', icon: '🥩' },
  { name: 'Cheddar Peyniri', desc: '18 ay dinlendirilmiş İrlanda cheddarı', icon: '🧀' },
  { name: 'Taze Sebzeler', desc: 'Her sabah çiftlikten gelen organik ürünler', icon: '🥬' },
  { name: 'Özel Sos', desc: 'Şefimizin gizli tarifi ile hazırlanan signature sos', icon: '🫙' },
];

const ScrollAnimationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <motion.div style={{ opacity, scale }} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Malzemelerimiz</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Her Katman,<br />
            <span className="text-primary">Bir Sanat</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            En kaliteli malzemelerle, katman katman hazırlanan eşsiz lezzetler.
          </p>
        </motion.div>

        <div className="space-y-8">
          {ingredients.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex items-center gap-6 md:gap-10 p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 group"
            >
              <span className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 font-sans">{item.name}</h3>
                <p className="text-muted-foreground text-base md:text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollAnimationSection;
