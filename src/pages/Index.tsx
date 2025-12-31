import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import TelegramWidget from '@/components/sections/TelegramWidget';

const Index = () => {
  const telegramUsername = 'your_telegram_bot';

  const handleTelegramClick = () => {
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection onTelegramClick={handleTelegramClick} />
      <AboutSection />
      <ContactSection onTelegramClick={handleTelegramClick} />
      <TelegramWidget onTelegramClick={handleTelegramClick} />
    </div>
  );
};

export default Index;
