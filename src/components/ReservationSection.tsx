import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ReservationSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '', note: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Merhaba! Rezervasyon yapmak istiyorum.\nAd: ${form.name}\nTelefon: ${form.phone}\nTarih: ${form.date}\nSaat: ${form.time}\nKişi: ${form.guests}\nNot: ${form.note}`;
    window.open(`https://wa.me/905551234567?text=${encodeURIComponent(msg)}`, '_blank');
    toast({ title: 'WhatsApp açılıyor...', description: 'Rezervasyon talebiniz iletiliyor.' });
  };

  return (
    <section id="reservation" className="py-32 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Rezervasyon</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Masanızı<br />
            <span className="text-primary">Ayırtın</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 p-8 rounded-3xl bg-card border border-border/50"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Adınız" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl h-12" required />
              <Input placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl h-12" required />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl h-12" required />
              <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl h-12" required />
              <Input type="number" placeholder="Kişi" min="1" max="20" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl h-12" required />
            </div>
            <Textarea placeholder="Notunuz (opsiyonel)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="bg-secondary/50 border-border/50 rounded-xl min-h-[100px]" />
            <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Rezervasyon
            </Button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, title: 'Adres', text: 'Bağdat Caddesi No:123, Kadıköy, İstanbul' },
              { icon: Phone, title: 'Telefon', text: '+90 555 123 45 67' },
              { icon: Clock, title: 'Çalışma Saatleri', text: 'Her gün 11:00 - 23:00' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg font-sans">{item.title}</h4>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border/50 h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6!2d29.06!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI0LjAiTiAyOcKwMDMnMzYuMCJF!5e0!3m2!1sen!2str!4v1!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
