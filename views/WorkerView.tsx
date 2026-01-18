import React from 'react';
import { 
  WORKER_HERO, 
  WORKER_BENEFITS, 
  WORKER_STEPS, 
  WORKER_REQUIREMENTS, 
  WHATSAPP_LINK 
} from '../constants';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle2, DollarSign } from 'lucide-react';

const WorkerView: React.FC = () => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      
      {/* Worker Hero */}
      <section className="bg-gray-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <div className="inline-block bg-accent-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                💼 Bolsa de Trabajo Activa
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                {WORKER_HERO.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {WORKER_HERO.subtitle}
              </p>
              <Button variant="secondary" href={`${WHATSAPP_LINK}?text=Hola, quiero registrarme para trabajar`}>
                {WORKER_HERO.cta}
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/worker1/800/600" 
                alt="Trabajadora feliz" 
                className="rounded-lg shadow-2xl opacity-90 border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Beneficios para ti" subtitle="Pensamos en tu bienestar y economía." />
          <div className="grid md:grid-cols-3 gap-8">
            {WORKER_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="¿Cómo empezar?" subtitle="El proceso es simple y transparente." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {WORKER_STEPS.map((step, idx) => (
               <div key={idx} className="relative">
                 <div className="bg-white p-6 rounded-lg shadow h-full flex flex-col items-center text-center">
                    <div className="text-4xl font-black text-gray-100 absolute top-2 right-4 pointer-events-none">
                      0{idx + 1}
                    </div>
                    <step.icon className="w-8 h-8 text-gray-800 mb-4" />
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Requirements & Earnings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Requirements */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Requisitos para unirte</h3>
                <ul className="space-y-4">
                  {WORKER_REQUIREMENTS.map((req, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Earnings Highlight */}
            <div className="lg:w-1/2">
              <div className="bg-accent-50 p-8 rounded-2xl border border-accent-100 h-full flex flex-col justify-center items-center text-center">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tus Ingresos</h3>
                <p className="text-gray-600 mb-6">Tarifas justas por tu esfuerzo</p>
                <div className="text-5xl font-extrabold text-gray-900 mb-2">
                  $45 <span className="text-xl font-medium text-gray-500">MXN / hora</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">* Mínimo 3 horas por servicio garantizado</p>
                <Button variant="whatsapp" href={`${WHATSAPP_LINK}?text=Hola, cumplo con los requisitos y quiero trabajar`}>
                  Quiero registrarme para trabajar
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WorkerView;