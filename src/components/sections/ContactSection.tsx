import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactSectionProps {
  onTelegramClick: () => void;
}

const ContactSection = ({ onTelegramClick }: ContactSectionProps) => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Как нас найти
              </h2>
              <p className="text-xl text-muted-foreground">
                Удобное расположение в Мытищах
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=37.736894%2C55.926437&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQxNjY5MRKcAdCg0L7RgdGB0LjRjywg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCc0YvRgtC40YnQuCwg0J7Qu9C40LzQv9C40LnRgdC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCDQstC70LDQtNC10L3QuNC1IDM5LCDRgdGC0YDQvtC10L3QuNC1IDEiCg3YrUhCFY82YkI%2C&z=16.5" 
                    width="100%" 
                    height="400" 
                    frameBorder="0"
                    className="w-full"
                    title="Samurai Garage на карте"
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Мытищи, Олимпийский проспект вл39с1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Сб: 10:00 - 20:00</p>
                    <p className="text-muted-foreground text-sm">Воскресенье: выходной</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Специализация</h3>
                    <p className="text-muted-foreground">Toyota и Lexus любых годов выпуска</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full mt-4"
                  onClick={onTelegramClick}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Записаться на диагностику
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Бесплатная диагностика перед ремонтом
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Консультация мастера и разбор вашей ситуации
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={onTelegramClick}
                className="bg-white text-primary hover:bg-white/90 font-heading text-lg px-8 py-6 rounded-full shadow-xl"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-heading text-lg px-8 py-6 rounded-full">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: 'MapPin', title: 'Мытищи', desc: 'Удобное расположение' },
                { icon: 'Clock', title: 'Пн-Сб 10:00-20:00', desc: 'Запись в удобное время' },
                { icon: 'Car', title: 'Toyota & Lexus', desc: 'Узкая специализация' },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <Icon name={item.icon} size={32} className="mb-3" />
                  <h4 className="font-heading font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#0f1419] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Wrench" size={24} className="text-primary" />
              <span className="font-heading text-xl font-bold">Toyota & Lexus Сервис</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Премиальный автосервис в Мытищах — решаем задачи любой сложности
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
