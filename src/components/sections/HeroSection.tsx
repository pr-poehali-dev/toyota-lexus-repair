import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroSectionProps {
  onTelegramClick: () => void;
}

const HeroSection = ({ onTelegramClick }: HeroSectionProps) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'Zap',
      title: 'Сложная автоэлектрика',
      description: 'Решаем проблемы с электроникой, которые не нашли другие сервисы',
    },
    {
      icon: 'Activity',
      title: 'Плавающие неисправности',
      description: 'Находим причину периодических ошибок и сбоев',
    },
    {
      icon: 'SearchCheck',
      title: 'Глубокая диагностика',
      description: 'Выявляем скрытые дефекты с помощью профессионального оборудования',
    },
    {
      icon: 'Volume2',
      title: 'Диагностика стуков',
      description: 'Определяем источник посторонних звуков в подвеске',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sword" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold leading-tight">SAMURAI GARAGE</h2>
                <p className="text-xs text-muted-foreground">Toyota & Lexus Service</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={() => window.location.href = 'tel:+79260110952'}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Icon name="Phone" className="mr-2" size={16} />
                +7 926 011-09-52
              </Button>
              <Button 
                size="sm" 
                onClick={onTelegramClick}
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <Icon name="Send" className="mr-2" size={16} />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-[#1e2a3a] to-background pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Icon name="Cpu" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">Технологичная диагностика</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
              Автосервис <span className="text-primary">Toyota</span> и <span className="text-primary">Lexus</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">в Мытищах</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Решаем сложные задачи, с которыми не справились другие сервисы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg" 
                onClick={onTelegramClick}
                className="bg-primary hover:bg-primary/90 text-white font-heading text-lg px-8 py-6 rounded-full animate-glow-pulse"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-heading text-lg px-8 py-6 rounded-full">
                <Icon name="CalendarCheck" className="mr-2" size={20} />
                Записаться на осмотр
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 text-center">
              {[
                { num: '2000+', label: 'решённых случаев' },
                { num: '95%', label: 'находим причину' },
                { num: '100%', label: 'гарантия качества' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-card/50 backdrop-blur border border-primary/20 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.num}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Что мы решаем <span className="text-primary">лучше других</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              К нам приезжают после 2–3 сервисов — и мы находим причину
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${
                  activeService === index
                    ? 'border-primary bg-card shadow-[0_0_30px_rgba(14,165,233,0.3)]'
                    : 'border-border bg-card/50 hover:border-primary/50'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      activeService === index
                        ? 'bg-primary text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                    }`}
                  >
                    <Icon name={service.icon} size={32} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-semibold mb-2">Мы специализируемся на сложных случаях</h4>
                <p className="text-muted-foreground">
                  Когда другие сервисы просто меняют детали наугад, мы находим истинную причину неисправности. 
                  Профессиональное оборудование и большой опыт позволяют решать задачи, от которых отказываются другие.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;