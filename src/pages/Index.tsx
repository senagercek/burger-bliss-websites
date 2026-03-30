import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScrollAnimationSection from '@/components/ScrollAnimationSection';
import MenuSection from '@/components/MenuSection';
import StorySection from '@/components/StorySection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ScrollAnimationSection />
      <MenuSection />
      <div id="story">
        <StorySection />
      </div>
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;
