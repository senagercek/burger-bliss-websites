import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

import menuBurger1 from '@/assets/menu-burger-1.jpg';
import menuBurger2 from '@/assets/menu-burger-2.jpg';
import menuBurger3 from '@/assets/menu-burger-3.jpg';
import menuBurger4 from '@/assets/menu-burger-4.jpg';
import menuBurger5 from '@/assets/menu-burger-5.jpg';
import menuBurger6 from '@/assets/menu-burger-6.jpg';

const menuItems = [
  { name: 'Classic Smash', price: '₺189', desc: 'Angus eti, cheddar, karamelize soğan, özel sos', badge: 'Bestseller', img: menuBurger1 },
  { name: 'Truffle Burger', price: '₺249', desc: 'Wagyu eti, trüf peyniri, roka, trüf mayo', badge: "Chef's Pick", img: menuBurger2 },
  { name: 'BBQ Monster', price: '₺219', desc: 'Çift kat et, bacon, BBQ sos, çıtır soğan halkası', badge: null, img: menuBurger3 },
  { name: 'Spicy Inferno', price: '₺209', desc: 'Habanero sos, jalapeño, pepper jack peynir', badge: 'Hot 🔥', img: menuBurger4 },
  { name: 'Mushroom Swiss', price: '₺199', desc: 'Sote mantar, İsviçre peyniri, sarımsak aioli', badge: null, img: menuBurger5 },
  { name: 'Veggie Deluxe', price: '₺169', desc: 'Plant-based patty, avokado, taze sebzeler', badge: 'Vegan', img: menuBurger6 },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-primary/80 tracking-[0.4em] uppercase text-xs mb-4">Our Menu</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            Signature
            <br />
            <span className="text-primary">Collection</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary">{item.price}</span>
                  <Button size="sm" className="rounded-full gap-2 glow-btn bg-primary text-primary-foreground hover:bg-primary/90">
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
