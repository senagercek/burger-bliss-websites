import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Menü', href: '#menu' },
  { label: 'Hikayemiz', href: '#story' },
  { label: 'Rezervasyon', href: '#reservation' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/30' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            Urban<span className="text-primary">Burger</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
                {l.label}
              </a>
            ))}
            <Button size="sm" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
              Rezervasyon Yap
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-bold hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <Button size="lg" className="rounded-full px-10 bg-primary text-primary-foreground" onClick={() => { setOpen(false); document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Rezervasyon Yap
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
