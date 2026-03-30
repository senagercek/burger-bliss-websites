import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TextImpactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 0.85], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grain-like radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_50%_/_0.04),_transparent_70%)]" />

      <motion.div style={{ scale, opacity }} className="text-center px-4">
        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tight leading-[0.9]">
          Tutku İçin
          <br />
          <span className="text-primary">Hazırlandı.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default TextImpactSection;
