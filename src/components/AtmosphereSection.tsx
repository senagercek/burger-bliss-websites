import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AtmosphereSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(24_100%_50%_/_0.08),_transparent_60%)]" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-primary/80 tracking-[0.4em] uppercase text-xs mb-6">The Atmosphere</p>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
          Experience
          <br />
          <span className="text-primary">The Flavor Live</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto">
          Ateşin sıcaklığı, etin cızırtısı ve unutulmaz bir atmosfer sizi bekliyor.
        </p>
      </motion.div>
    </section>
  );
};

export default AtmosphereSection;
