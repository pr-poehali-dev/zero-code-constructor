import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const translations = {
  ru: {
    nav: {
      main: 'Главная',
      modules: 'Модули',
      templates: 'Шаблоны',
      cases: 'Кейсы',
      support: 'Поддержка',
      pricing: 'Тарифы'
    },
    hero: {
      title: 'Создавайте приложения без кода',
      subtitle: 'Конструктор на зерокодинге с готовыми модулями для любых сфер бизнеса',
      cta: 'Начать бесплатно',
      demo: 'Смотреть демо'
    },
    features: {
      title: 'Всё необходимое для создания приложений',
      noCode: 'Без кодинга',
      noCodeDesc: 'Визуальный редактор для создания сложных приложений',
      modules: 'Готовые модули',
      modulesDesc: 'Библиотека компонентов для любых задач',
      integration: 'Интеграции',
      integrationDesc: 'Подключение к популярным сервисам одним кликом'
    },
    modules: {
      title: 'Модули для любого бизнеса',
      crm: 'CRM',
      crmDesc: 'Управление клиентами и сделками',
      ecommerce: 'Электронная коммерция',
      ecommerceDesc: 'Интернет-магазин под ключ',
      analytics: 'Аналитика',
      analyticsDesc: 'Дашборды и отчёты',
      hr: 'Кадры',
      hrDesc: 'Управление персоналом'
    },
    templates: {
      title: 'Готовые шаблоны',
      subtitle: 'Начните с проверенных решений',
      landing: 'Посадочная страница',
      dashboard: 'Панель управления',
      marketplace: 'Торговая площадка'
    }
  },
  en: {
    nav: {
      main: 'Home',
      modules: 'Modules',
      templates: 'Templates',
      cases: 'Cases',
      support: 'Support',
      pricing: 'Pricing'
    },
    hero: {
      title: 'Build Apps Without Code',
      subtitle: 'No-code platform with ready modules for any business sphere',
      cta: 'Start Free',
      demo: 'Watch Demo'
    },
    features: {
      title: 'Everything You Need to Build Apps',
      noCode: 'No Coding',
      noCodeDesc: 'Visual editor for creating complex applications',
      modules: 'Ready Modules',
      modulesDesc: 'Component library for any task',
      integration: 'Integrations',
      integrationDesc: 'Connect to popular services with one click'
    },
    modules: {
      title: 'Modules for Any Business',
      crm: 'CRM',
      crmDesc: 'Client and deal management',
      ecommerce: 'E-commerce',
      ecommerceDesc: 'Turnkey online store',
      analytics: 'Analytics',
      analyticsDesc: 'Dashboards and reports',
      hr: 'HR',
      hrDesc: 'Personnel management'
    },
    templates: {
      title: 'Ready Templates',
      subtitle: 'Start with proven solutions',
      landing: 'Landing',
      dashboard: 'Dashboard',
      marketplace: 'Marketplace'
    }
  }
};

const Index = () => {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const t = translations[lang];

  const modulesList = [
    { icon: 'Users', title: t.modules.crm, desc: t.modules.crmDesc, color: 'bg-purple-100 text-purple-700' },
    { icon: 'ShoppingCart', title: t.modules.ecommerce, desc: t.modules.ecommerceDesc, color: 'bg-blue-100 text-blue-700' },
    { icon: 'BarChart3', title: t.modules.analytics, desc: t.modules.analyticsDesc, color: 'bg-green-100 text-green-700' },
    { icon: 'Briefcase', title: t.modules.hr, desc: t.modules.hrDesc, color: 'bg-orange-100 text-orange-700' }
  ];

  const templatesList = [
    { name: t.templates.landing, image: '🚀' },
    { name: t.templates.dashboard, image: '📊' },
    { name: t.templates.marketplace, image: '🛒' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NoCode
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#main" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.main}</a>
              <a href="#modules" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.modules}</a>
              <a href="#templates" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.templates}</a>
              <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.cases}</a>
              <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.support}</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.pricing}</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setLang('ru')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    lang === 'ru' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    lang === 'en' ? 'bg-white shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
              <Button className="shadow-lg shadow-primary/20">
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="main" className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Sparkles" size={14} className="mr-1" />
            No-Code Platform
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold font-heading mb-6 animate-slide-up bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all">
              {t.hero.cta}
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              <Icon name="Play" size={20} className="mr-2" />
              {t.hero.demo}
            </Button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">{t.features.noCode}</h3>
            <p className="text-muted-foreground">{t.features.noCodeDesc}</p>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
              <Icon name="Boxes" size={24} className="text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">{t.features.modules}</h3>
            <p className="text-muted-foreground">{t.features.modulesDesc}</p>
          </Card>
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
              <Icon name="Plug" size={24} className="text-white" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">{t.features.integration}</h3>
            <p className="text-muted-foreground">{t.features.integrationDesc}</p>
          </Card>
        </div>
      </section>

      <section id="modules" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4">{t.modules.title}</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modulesList.map((module, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 group"
              >
                <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={module.icon as any} size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4">{t.templates.title}</h2>
            <p className="text-xl text-muted-foreground">{t.templates.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {templatesList.map((template, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {template.image}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-center">{template.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon name="Zap" size={24} />
            </div>
            <span className="text-2xl font-bold font-heading">NoCode</span>
          </div>
          <p className="text-primary-foreground/80">© 2024 NoCode Platform. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;