import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ingredientBun from '@/assets/ingredient-bun.png';
import ingredientPatty from '@/assets/ingredient-patty.png';
import ingredientCheese from '@/assets/ingredient-cheese.png';
import ingredientLettuce from '@/assets/ingredient-lettuce.png';

const ingredients = [
  { img: ingredientBun, name: 'Günlük Ekmek', desc: 'Günlük taze brioche', offsetY: -120 },
  { img: ingredientCheese, name: 'Eriyen Lezzet', desc: '18 ay dinlendirilmiş cheddar', offsetY: -40 },
  { img: ingredientPatty, name: 'Taze Et', desc: 'Premium Angus eti', offsetY: 40 },
  { img: ingredientLettuce, name: 'Bahçeden Taze', desc: 'Organik yeşillikler', offsetY: 120 },
];

const IngredientSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="py-14 md:py-24 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24 relative z-10"
      >
        <p className="text-primary/80 tracking-[0.4em] uppercase text-xs mb-4">İçerikler</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
          Her Katman,
          <br />
          <span className="text-primary">Bir Şaheser</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-6 md:space-y-0">
        {ingredients.map((item, i) => {
          const yRange = useTransform(scrollYProgress, [0.1 + i * 0.1, 0.3 + i * 0.1], [60, 0]);
          const opRange = useTransform(scrollYProgress, [0.1 + i * 0.1, 0.25 + i * 0.1], [0, 1]);

          return (
            <motion.div
              key={item.name}
              style={{ y: yRange, opacity: opRange }}
              className={`flex items-center gap-6 md:gap-12 p-5 md:p-8 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}
            >
              <div className="w-24 h-24 md:w-40 md:h-40 flex-shrink-0 relative">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm md:text-lg">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IngredientSection;
