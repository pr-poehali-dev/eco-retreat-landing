import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-10-10T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEF3C7] via-white to-[#FEF3C7]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/img/c502ff55-8ed0-40b6-ac0e-4239646a979c.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-rose-400/20 to-violet-400/30" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
            <p className="text-sm font-semibold text-amber-600">РЕТРИТ "ЭКО-РЕФЛЕКС"</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Позволь Себе<br />
            Остановиться и Отдохнуть
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Настало время сбросить напряжение, восстановить внутренний баланс и найти вдохновение в тишине природы
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-10 inline-block shadow-2xl border-2 border-amber-200">
            <div className="flex items-center gap-4 mb-4">
              <Icon name="Calendar" className="text-amber-600" size={32} />
              <p className="text-4xl font-bold text-slate-800">24–26 октября</p>
            </div>
            <p className="text-slate-600 text-lg">Трехдневное путешествие к себе</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open("https://t.me/VyacheslavMaks", "_blank")}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-10 py-7 text-xl rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Забронировать место
            </Button>
            
            <Button
              onClick={() => window.open("tel:+79857554311", "_blank")}
              variant="outline"
              size="lg"
              className="bg-white/90 backdrop-blur-sm border-2 border-amber-500 text-amber-700 px-10 py-7 text-xl rounded-full hover:bg-amber-50 transition-all duration-300 font-semibold"
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить
            </Button>
          </div>
          
          <p className="mt-6 text-amber-700 font-semibold text-lg animate-pulse">
            ⏰ Мест осталось всего 6!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16 animate-slide-up">
            Начало пути
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Sprout",
                title: "Наедине с природой",
                description: "Полное погружение в природную атмосферу для глубокого расслабления и очищения сознания",
              },
              {
                icon: "Heart",
                title: "Безопасное погружение",
                description: "Создание доверительной и безопасной среды, чтобы вы могли безопасно погрузиться в себя",
              },
              {
                icon: "Users",
                title: "Теплая компания",
                description: "Проведите время среди единомышленников, обретите друзей с общими ценностями",
              },
              {
                icon: "Zap",
                title: "Освобождение энергии",
                description: "Практики, направленные на снятие блоков и освобождение внутреннего потенциала",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">{item.title}</h3>
                  <p className="text-[#403E43]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-8">
            О программе
          </h2>
          <p className="text-xl text-center text-[#403E43] mb-16 max-w-3xl mx-auto">
            Трехдневное путешествие к себе на берегу Истринского водохранилища
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Coffee",
                title: "Техники возврата энергии",
                description: "Эффективные методы для быстрого восстановления жизненной силы",
              },
              {
                icon: "Trees",
                title: "Прогулки на природе",
                description: "Ежедневные моционы в лесу для медитативного контакта с природой",
              },
              {
                icon: "Flame",
                title: "Посиделки у костра",
                description: "Место для душевных бесед и наслаждения магией живого огня",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-white">
                <CardContent className="p-6">
                  <Icon name={item.icon} className="text-[#F59E0B] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">{item.title}</h3>
                  <p className="text-[#403E43]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16">
            Трансформационные инструменты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] rounded-full flex items-center justify-center mr-4">
                    <Icon name="Sparkles" className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1F2C]">Игра «Сила»</h3>
                </div>
                <p className="text-[#403E43] mb-4">
                  Трансформационная игра была создана в горах, в единении с природой и Вселенной. Она служит мощным инструментом для легкого погружения в себя.
                </p>
                <ul className="space-y-2 text-[#403E43]">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-[#F59E0B] mr-2 mt-1" size={20} />
                    <span>Помогает решить актуальный запрос</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-[#F59E0B] mr-2 mt-1" size={20} />
                    <span>Позволяет осознать скрытые возможности</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-[#F59E0B] mr-2 mt-1" size={20} />
                    <span>Способствует обретению внутренней силы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <div
                  className="h-48 rounded-2xl bg-cover bg-center mb-6"
                  style={{ backgroundImage: "url('/img/144b31dc-70de-44a7-b7c1-cad09a75a7e6.jpg')" }}
                />
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center mr-4">
                    <Icon name="Blocks" className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1F2C]">LEGO® Serious Play®</h3>
                </div>
                <p className="text-[#403E43]">
                  Инновационный подход к решению сложных взрослых запросов с помощью детского конструктора. Используется NASA, BMW, Microsoft и Google для стратегического планирования.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#8B5CF6] rounded-full flex items-center justify-center mr-4">
                    <Icon name="Waves" className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1F2C]">Песочное моделирование</h3>
                </div>
                <p className="text-[#403E43]">
                  Активно применяется в арт-терапии для работы с подсознанием. Метод позволяет в простой форме заглянуть в далекие уголки души. Озарения придут как "свет с небес".
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] rounded-full flex items-center justify-center mr-4">
                    <Icon name="Image" className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1F2C]">Метафорические карты</h3>
                </div>
                <p className="text-[#403E43] mb-4">
                  Психологический метод, помогающий исследовать подсознание через ассоциации с изображениями. Карты служат "дверцей" к бессознательному.
                </p>
                <p className="text-[#403E43]">
                  Работа включает оба полушария мозга, что позволяет увидеть новые аспекты запроса и найти нестандартные решения.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Button
              onClick={() => window.open("https://t.me/VyacheslavMaks", "_blank")}
              className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white px-12 py-6 text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16">
            Ретрит проводят
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                    А
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1F2C]">Анжела Михеева</h3>
                    <p className="text-[#8A898C]">Арт-коуч, автор игры "Сила"</p>
                  </div>
                </div>
                <p className="text-[#403E43] mb-4">
                  Арт-коуч, маркетолог, автор трансформационной игры и мак-карт "СИЛА"
                </p>
                <p className="text-[#403E43]">
                  Любит путешествия, творчество, природу и красоту, теплые душевные компании
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                    В
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1F2C]">Вячеслав Максимов</h3>
                    <p className="text-[#8A898C]">Бизнес-коуч, наставник</p>
                  </div>
                </div>
                <p className="text-[#403E43] mb-4">
                  Бизнес-коуч, фасилитатор, наставник с богатым опытом
                </p>
                <p className="text-[#403E43]">
                  Разделяет страсть к путешествиям, фотографии, креативу, любви к природе и душевной атмосфере
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-xl text-[#403E43] mt-12">
            Мы будем рады провести для вас классные выходные, полные глубокого отдыха и личных открытий!
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-8">
            Локация и условия
          </h2>
          <p className="text-xl text-center text-[#403E43] mb-16">
            Загородный клуб "Истра Холидей"
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <Icon name="MapPin" className="text-[#F59E0B] mb-4" size={40} />
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Местоположение</h3>
                <p className="text-[#403E43] mb-4">
                  На берегу живописного Истринского водохранилища — идеальное сочетание водной глади и лесного массива
                </p>
                <p className="text-sm text-[#8A898C]">
                  Московская область, Солнечногорский р-н, деревня Трусово, БО Березки, стр. 19
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8">
                <Icon name="Home" className="text-[#F59E0B] mb-4" size={40} />
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Проживание</h3>
                <p className="text-[#403E43] mb-6">
                  Уютный домик, рассчитанный на 6 человек, с комфортабельным 2-х местным размещением
                </p>
                <Icon name="UtensilsCrossed" className="text-[#F59E0B] mb-4" size={40} />
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Питание</h3>
                <p className="text-[#403E43]">
                  Полный пансион по системе "шведский стол" (завтрак, обед, ужин)
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f4e3d2c1b0a9f8e7d6c5b4a3d2c1b0a&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта локации"
            ></iframe>
          </div>
          
          <div className="text-center mt-16">
            <Button
              onClick={() => window.open("https://t.me/VyacheslavMaks", "_blank")}
              className="bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white px-12 py-6 text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#F59E0B] to-[#EC4899] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Раннее бронирование
          </h2>
          <p className="text-2xl mb-8">До 10 октября — специальная цена</p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <p className="text-lg mb-2 line-through opacity-75">45 000 ₽</p>
            <p className="text-6xl font-bold mb-4">35 000 ₽</p>
            <p className="text-xl">При бронировании вдвоем — скидка 10%</p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-4xl font-bold">{timeLeft.days}</p>
              <p className="text-sm opacity-90">дней</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-4xl font-bold">{timeLeft.hours}</p>
              <p className="text-sm opacity-90">часов</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-4xl font-bold">{timeLeft.minutes}</p>
              <p className="text-sm opacity-90">минут</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <p className="text-4xl font-bold">{timeLeft.seconds}</p>
              <p className="text-sm opacity-90">секунд</p>
            </div>
          </div>

          <div className="bg-white/90 rounded-3xl p-8 text-[#1A1F2C]">
            <h3 className="text-2xl font-bold mb-6">Что включено</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <Icon name="Check" className="text-[#F59E0B] mr-3 mt-1" size={24} />
                <span>Проживание в комфортабельных номерах</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" className="text-[#F59E0B] mr-3 mt-1" size={24} />
                <span>Трехразовое питание (шведский стол)</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" className="text-[#F59E0B] mr-3 mt-1" size={24} />
                <span>Полная программа ретрита</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" className="text-[#F59E0B] mr-3 mt-1" size={24} />
                <span>Все материалы для практик</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-form" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-8">
            Забронировать место
          </h2>
          <p className="text-xl text-center text-[#403E43] mb-12">
            Оставьте заявку и мы свяжемся с вами для подтверждения
          </p>
          
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                    Ваше имя
                  </label>
                  <Input
                    required
                    placeholder="Как к вам обращаться?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                    Телефон или WhatsApp
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                    Удобный способ связи
                  </label>
                  <Input
                    placeholder="Telegram, WhatsApp, звонок..."
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1A1F2C] mb-2">
                    Комментарий (необязательно)
                  </label>
                  <Textarea
                    placeholder="Есть ли у вас вопросы или пожелания?"
                    className="w-full min-h-24"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899] text-white py-6 text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FEF3C7]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1F2C] mb-16">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Как добраться до места проведения?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Ретрит проходит в загородном клубе "Истра Холидей" (Московская область, Солнечногорский р-н, деревня Трусово, БО Березки, стр. 19). Трансфер до места проведения не включен в стоимость, но мы поможем организовать совместную поездку с другими участниками.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Нужен ли опыт участия в ретритах?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Нет, опыт не требуется. Программа разработана так, чтобы каждый участник чувствовал себя комфортно, независимо от уровня подготовки. Мы создаем безопасную и поддерживающую атмосферу для всех.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Что взять с собой?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Удобную одежду для практик, теплые вещи для прогулок и вечеров у костра, личные вещи. Все материалы для занятий предоставляются организаторами. Подробный список отправим после бронирования.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Как происходит оплата?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Для бронирования места требуется предоплата 100%. Полная оплата должна быть произведена до 25 октября. При бронировании вдвоем действует скидка 10%. Для раннего бронирования до 10 октября — специальная цена 35 000 рублей вместо 45 000.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Сколько человек в группе?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Количество мест ограничено — всего 6 человек. Это позволяет уделить внимание каждому участнику и создать атмосферу доверия и глубокого контакта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-2xl px-6 border-none shadow-lg">
              <AccordionTrigger className="text-lg font-semibold text-[#1A1F2C] hover:text-[#F59E0B]">
                Можно ли приехать одному?
              </AccordionTrigger>
              <AccordionContent className="text-[#403E43]">
                Да, конечно! Многие участники приезжают самостоятельно. Мы проводим знакомства в игровой форме, и уже в первый день формируется теплая атмосфера взаимной поддержки.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/img/35c7f50b-8761-4223-af3b-766ea611e6a5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/80 to-[#8B5CF6]/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Контакты
          </h2>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
                <div className="flex items-center">
                  <Icon name="User" className="mr-3" size={24} />
                  <div className="text-left">
                    <p className="font-semibold">Вячеслав Максимов</p>
                    <p className="text-sm opacity-90">Организатор</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3" size={24} />
                  <a href="tel:+79857554311" className="font-semibold hover:text-[#F59E0B] transition-colors">
                    +7 (985) 755-43-11
                  </a>
                </div>
                
                <Button
                  onClick={() => window.open("https://t.me/VyacheslavMaks", "_blank")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1A1F2C] transition-all"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-75">
            © 2024 Ретрит "Эко-рефлекс". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;