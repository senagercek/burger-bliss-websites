import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBurger from '@/assets/hero-burger.png';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const burgerScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.8]);
  const burgerOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const burgerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px]" />
        
        {/* Hero burger with scroll zoom */}
        <motion.div
          style={{ scale: burgerScale, opacity: burgerOpacity, y: burgerY }}
          className="absolute z-10"
        >
          <motion.img
            src={heroBurger}
            alt="Premium Burger"
            width={500}
            height={500}
            className="w-[300px] md:w-[450px] lg:w-[500px] drop-shadow-[0_20px_60px_rgba(255,107,0,0.3)]"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-20 text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-primary/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-8 font-medium"
          >
            Premium Burger Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[120px] font-black leading-[0.85] mb-8 tracking-tight"
          >
            Not Just
            <br />
            <span className="text-primary">a Burger.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10"
          >
            Scroll to experience
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ opacity: textOpacity }}
        >
          <ChevronDown className="w-6 h-6 text-primary/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
