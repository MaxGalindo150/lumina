import React, { useState } from 'react';
import ClientView from './views/ClientView';
import WorkerView from './views/WorkerView';
import { UserType } from './types';
import { Sparkles, Briefcase, Menu, X, Facebook, Instagram } from 'lucide-react';
import Button from './components/Button';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [userType, setUserType] = useState<UserType>(UserType.CLIENT);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleUserType = (type: UserType) => {
    setUserType(type);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isClient = userType === UserType.CLIENT;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.reload()}>
              <Sparkles className={`w-8 h-8 ${isClient ? 'text-brand-600' : 'text-accent-600'}`} />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Limpia<span className={isClient ? 'text-brand-600' : 'text-accent-600'}>Zac</span>
              </span>
            </div>

            {/* Desktop Switcher */}
            <div className="hidden md:flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => toggleUserType(UserType.CLIENT)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isClient 
                    ? 'bg-white text-brand-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Soy Cliente
              </button>
              <button
                onClick={() => toggleUserType(UserType.WORKER)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isClient 
                    ? 'bg-white text-accent-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Busco Trabajo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg animate-fade-in">
             <div className="flex flex-col space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Selecciona tu perfil</p>
               <button
                onClick={() => toggleUserType(UserType.CLIENT)}
                className={`flex items-center p-3 rounded-lg border ${
                  isClient ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600'
                }`}
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Quiero contratar limpieza
              </button>
              <button
                onClick={() => toggleUserType(UserType.WORKER)}
                className={`flex items-center p-3 rounded-lg border ${
                  !isClient ? 'border-accent-500 bg-accent-50 text-accent-700' : 'border-gray-200 text-gray-600'
                }`}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Quiero trabajar
              </button>
             </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {isClient ? <ClientView /> : <WorkerView />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 text-white">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">LimpiaZac</span>
              </div>
              <p className="max-w-xs text-sm">
                Conectando hogares limpios con profesionales de confianza en Zacatecas y Guadalupe. Simple, seguro y rápido.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Servicio</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => toggleUserType(UserType.CLIENT)} className="hover:text-brand-400">Para Clientes</button></li>
                <li><button onClick={() => toggleUserType(UserType.WORKER)} className="hover:text-brand-400">Para Trabajadoras</button></li>
                <li><a href="#" className="hover:text-brand-400">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-brand-400">Privacidad</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Zacatecas, Zac. México</li>
                <li>
                   <a href={WHATSAPP_LINK} className="hover:text-green-400 flex items-center">
                     WhatsApp Oficial
                   </a>
                </li>
                <li className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs border-t border-gray-800 pt-8">
            &copy; {new Date().getFullYear()} LimpiaZac. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;