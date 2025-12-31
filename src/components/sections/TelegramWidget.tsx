import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface TelegramWidgetProps {
  onTelegramClick: () => void;
}

const TelegramWidget = ({ onTelegramClick }: TelegramWidgetProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative">
        <Button
          size="lg"
          onClick={onTelegramClick}
          className="h-16 w-16 rounded-full bg-[#0088cc] hover:bg-[#006ba3] text-white shadow-2xl animate-glow-pulse p-0 flex items-center justify-center"
        >
          <Icon name="Send" size={28} />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-20 right-0 bg-card border-2 border-primary/30 rounded-2xl shadow-2xl p-4 w-64 animate-slide-up hidden group-hover:block">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0">
            <Icon name="Send" size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-1">Есть вопросы?</h4>
            <p className="text-xs text-muted-foreground mb-2">Напишите нам в Telegram — ответим быстро!</p>
            <Button
              size="sm"
              onClick={onTelegramClick}
              className="bg-[#0088cc] hover:bg-[#006ba3] text-white text-xs"
            >
              Написать сейчас
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramWidget;
