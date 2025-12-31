import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
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

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Как мы <span className="text-primary">работаем</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Чёткий процесс — от первого звонка до выдачи автомобиля
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card border-2 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Наши <span className="text-primary">преимущества</span>
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
                  Работаем с любыми запчастями
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  При необходимости подбираем оригиналы и аналоги под ваш бюджет. Фото- и видеоотчёт по результатам работ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Наш автосервис
            </h2>
            <p className="text-xl text-muted-foreground">
              Современное оборудование и профессиональная команда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/photo_5380005820751351069_w.jpg" 
                alt="Автосервис Samurai Garage - зона ремонта"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-heading font-semibold p-6">Современная зона ремонта</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/photo_5380005820751351176_w.jpg" 
                alt="Сервис Lexus - работа с премиум автомобилями"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-heading font-semibold p-6">Работа с Lexus</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src="https://cdn.poehali.dev/files/photo_5380005820751351179_w.jpg" 
                alt="Диагностика Lexus - премиум интерьер"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-heading font-semibold p-6">Диагностика премиум авто</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
