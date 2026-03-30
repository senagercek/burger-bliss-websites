import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(36_100%_50%_/_0.08),_transparent_70%)]" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Hikayemiz</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              2018'den Beri<br />
              <span className="text-primary">Tutku ile</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              UrbanBurger, İstanbul'un kalbinde bir tutku projesi olarak başladı. 
              Amacımız basitti: dünyanın en iyi burgeri yapmak. Premium malzemeler, 
              el yapımı teknikler ve yılların deneyimiyle her lokmada mükemmelliği 
              sunuyoruz.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Şeflerimiz her gün taze malzemelerle çalışır, her burger özenle 
              hazırlanır ve her müşterimiz ailemizin bir parçası olur.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { num: '50K+', label: 'Mutlu Müşteri' },
                { num: '15+', label: 'Ödül' },
                { num: '6', label: 'Yıllık Deneyim' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary">{stat.num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-border/50 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-9xl mb-6">👨‍🍳</div>
                <p className="text-2xl font-bold">Chef Marcus</p>
                <p className="text-muted-foreground">Kurucu & Baş Şef</p>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
              <span className="text-4xl">🔥</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
