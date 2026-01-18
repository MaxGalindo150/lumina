import React from 'react';
import { 
  CLIENT_HERO, 
  CLIENT_STEPS, 
  CLIENT_SERVICES, 
  CLIENT_INCLUDES, 
  CLIENT_BENEFITS, 
  WHATSAPP_LINK 
} from '../constants';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Check, Star } from 'lucide-react';

const ClientView: React.FC = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative bg-brand-50 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                📍 Disponible en Zacatecas y Guadalupe
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                {CLIENT_HERO.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                {CLIENT_HERO.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="whatsapp" href={WHATSAPP_LINK}>
                  {CLIENT_HERO.cta}
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth'})}>
                  Ver Precios
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-3 opacity-10"></div>
               <img 
                src="https://picsum.photos/seed/clean1/800/600" 
                alt="Limpieza profesional" 
                className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="¿Cómo funciona?" 
            subtitle="En solo 3 pasos tendrás tu hogar reluciente." 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {CLIENT_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nuestros Servicios" subtitle="Adaptados a tus necesidades específicas." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-brand-200 transition-colors">
                <service.icon className="w-10 h-10 text-brand-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes & Benefits Split */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* What is included */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
                ¿Qué incluye la limpieza?
              </h3>
              <div className="space-y-4">
                {CLIENT_INCLUDES.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
                * No incluye limpieza de vidrios exteriores en altura ni cargas pesadas.
              </div>
            </div>

            {/* Why choose us */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {CLIENT_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <benefit.icon className="w-5 h-5 text-brand-600 mr-2" />
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="w-64 h-64 bg-white rounded-full absolute -top-10 -left-10"></div>
            <div className="w-96 h-96 bg-white rounded-full absolute bottom-10 right-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionTitle 
            title="Precios Transparentes" 
            subtitle="Sin contratos forzosos. Paga solo por lo que necesitas." 
            light={true}
          />
          
          <div className="max-w-md mx-auto bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-brand-50 p-6 border-b border-brand-100">
              <h3 className="text-xl font-semibold text-gray-600 uppercase tracking-wide">Limpieza Estándar</h3>
              <div className="mt-4 flex justify-center items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-gray-900">$70</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">MXN / hora</span>
              </div>
              <p className="mt-2 text-sm text-brand-600 font-medium">Mínimo 3 horas por servicio</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Personal de confianza</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Satisfacción garantizada</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Descuento en servicios recurrentes</span>
              </div>
              <div className="pt-6">
                <Button variant="whatsapp" fullWidth href={WHATSAPP_LINK}>
                  Agenda tu limpieza por WhatsApp
                </Button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Al dar clic irás directo al chat para coordinar detalles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientView;