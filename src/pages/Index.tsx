import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
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

  const process = [
    { step: '01', title: 'Осмотр и диагностика', desc: 'Выявляем симптомы, фиксируем историю' },
    { step: '02', title: 'Глубокая проверка', desc: 'Компьютерная и ручная диагностика узлов' },
    { step: '03', title: 'Согласование работ', desc: 'Объясняем причину и варианты решения' },
    { step: '04', title: 'Выполнение ремонта', desc: 'С учётом бюджета и пожеланий клиента' },
    { step: '05', title: 'Фото/видео отчёт', desc: 'Прозрачно показываем весь процесс' },
    { step: '06', title: 'Гарантия на работы', desc: 'Уверенность в качестве ремонта' },
  ];

  const advantages = [
    { icon: 'Target', title: 'Узкая специализация', text: 'Работаем преимущественно с Toyota и Lexus' },
    { icon: 'Wrench', title: 'Опытные мастера', text: 'Большой опыт работы со сложными случаями' },
    { icon: 'ScanSearch', title: 'Глубокая диагностика', text: 'Ищем первопричину, а не симптомы' },
    { icon: 'Gift', title: 'Бесплатная диагностика', text: 'Перед началом любого ремонта' },
    { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'На все выполненные работы' },
    { icon: 'HandHeart', title: 'Честный подход', text: 'Не навязываем лишние услуги' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-[#1e2a3a] to-background">
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
              Решаем сложные неисправности, с которыми не справились другие сервисы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading text-lg px-8 py-6 rounded-full animate-glow-pulse">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/10 font-heading text-lg px-8 py-6 rounded-full">
                <Icon name="CalendarCheck" className="mr-2" size={20} />
                Записаться на осмотр
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
              {[
                { num: '15+', label: 'лет опыта' },
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

      {/* Services Section */}
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
                  Если в других сервисах не смогли определить проблему, провели диагностику — а результат нулевой, или ошибки возвращаются после ремонта — приезжайте к нам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-[#1e2a3a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Наш подход и <span className="text-primary">процесс работы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Системная диагностика от первого осмотра до гарантии
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                  <Card className="relative bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl font-heading font-bold text-primary/20">{item.step}</div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                      <div className="mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="text-primary">наш сервис</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Премиальный подход с уважением к вашему времени и бюджету
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {advantages.map((adv, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 border-2 border-border hover:border-primary/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon name={adv.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/30">
              <CardContent className="p-8 md:p-12 text-center">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Работаем с запчастями клиента
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  При необходимости подбираем оригиналы и аналоги под ваш бюджет. Фото- и видеоотчёт по результатам работ.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Честность', 'Прозрачность', 'Экспертиза', 'Гарантия'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-heading text-lg px-8 py-6 rounded-full shadow-xl">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Консультация в WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-heading text-lg px-8 py-6 rounded-full">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: 'MapPin', title: 'Мытищи', desc: 'Удобное расположение' },
                { icon: 'Clock', title: 'Пн-Сб 9:00-20:00', desc: 'Запись в удобное время' },
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
