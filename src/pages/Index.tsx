import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IngredientSection from '@/components/IngredientSection';
import TextImpactSection from '@/components/TextImpactSection';
import MenuSection from '@/components/MenuSection';
import SocialProofSection from '@/components/SocialProofSection';
import AtmosphereSection from '@/components/AtmosphereSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden grain">
      <Navbar />
      <HeroSection />
      <IngredientSection />
      <TextImpactSection />
      <MenuSection />
      <SocialProofSection />
      <AtmosphereSection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;
