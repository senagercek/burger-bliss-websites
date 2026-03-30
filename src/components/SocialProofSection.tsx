import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Elif K.', text: '"İstanbul\'un en iyi burgeri, tartışmasız!"', rating: 5 },
  { name: 'Ahmet B.', text: '"Premium deneyim, her kuruşuna değer."', rating: 5 },
  { name: 'Sarah M.', text: '"Türkiye\'de yediğim en iyi burger!"', rating: 5 },
  { name: 'Mert Y.', text: '"Truffle Burger hayatımı değiştirdi 🔥"', rating: 5 },
];

const SocialProofSection = () => {
  return (
    <section className="py-14 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-primary/80 tracking-[0.4em] uppercase text-xs mb-4">Yorumlar</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Misafirlerimiz<br /><span className="text-primary">Ne Diyor?</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm mb-4 leading-relaxed">{review.text}</p>
            <p className="text-muted-foreground text-xs font-medium">— {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
