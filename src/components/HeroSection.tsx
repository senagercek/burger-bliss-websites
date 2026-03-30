import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import BurgerModel from './BurgerModel';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffa500" />
            <directionalLight position={[-3, 2, 4]} intensity={0.5} color="#ff6b35" />
            <pointLight position={[0, -2, 3]} intensity={0.8} color="#ff8c00" />
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
              <BurgerModel />
            </Float>
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Premium Burger Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9]"
        >
          Taste Beyond
          <span className="block text-primary">Reality</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          El yapımı lezzetler, premium malzemeler ve unutulmaz bir deneyim sizi bekliyor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-lg px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Menüye Git
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 rounded-full border-primary/30 hover:bg-primary/10"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Rezervasyon
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
