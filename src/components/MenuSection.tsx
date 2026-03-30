import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const menuItems = [
  { name: 'Classic Smash', price: '₺189', desc: 'Angus eti, cheddar, karamelize soğan, özel sos', badge: 'Bestseller', color: 'from-orange-500/20 to-red-500/20' },
  { name: 'Truffle Burger', price: '₺249', desc: 'Wagyu eti, trüf peyniri, roka, trüf mayo', badge: 'Chef\'s Pick', color: 'from-amber-500/20 to-yellow-500/20' },
  { name: 'BBQ Monster', price: '₺219', desc: 'Çift kat et, bacon, BBQ sos, çıtır soğan halkası', badge: null, color: 'from-red-500/20 to-orange-500/20' },
  { name: 'Veggie Deluxe', price: '₺169', desc: 'Plant-based patty, avokado, taze sebzeler, vegan mayo', badge: 'Vegan', color: 'from-green-500/20 to-emerald-500/20' },
  { name: 'Spicy Inferno', price: '₺209', desc: 'Habanero sos, jalapeño, pepper jack peynir, acı mayo', badge: 'Hot 🔥', color: 'from-red-600/20 to-pink-500/20' },
  { name: 'Mushroom Swiss', price: '₺199', desc: 'Sote mantar, İsviçre peyniri, sarımsak aioli', badge: null, color: 'from-stone-500/20 to-amber-500/20' },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-32 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Menümüz</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Signature<br />
            <span className="text-primary">Burgers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {item.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
                    {item.badge}
                  </span>
                )}
                {/* Emoji placeholder for burger visual */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">🍔</div>
                <h3 className="text-2xl font-bold mb-2 font-sans">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{item.price}</span>
                  <Button size="sm" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingBag className="w-4 h-4" />
                    Sipariş
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
