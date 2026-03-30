import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border/30">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-2xl font-bold">Urban<span className="text-primary">Burger</span></h3>
          <p className="text-muted-foreground text-sm mt-1">Lezzetin Gerçeküstü Hali</p>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Menü</a>
          <a href="#reservation" className="hover:text-primary transition-colors">Rezervasyon</a>
          <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2024 UrbanBurger. Tüm hakları saklıdır.</p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
