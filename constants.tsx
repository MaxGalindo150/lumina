import { 
  Home, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CalendarCheck, 
  Smartphone, 
  Banknote, 
  UserCheck, 
  MapPin,
  Brush,
  Zap
} from 'lucide-react';
import { StepItem, ServiceItem } from './types';

// Client Content
export const CLIENT_HERO = {
  title: "Limpieza a domicilio por horas en Zacatecas",
  subtitle: "Tranquilidad, rapidez y personal verificado para tu hogar.",
  cta: "Agenda tu limpieza por WhatsApp"
};

export const CLIENT_STEPS: StepItem[] = [
  {
    title: "1. Elige tu servicio",
    description: "Cuéntanos qué necesitas y por cuántas horas.",
    icon: Sparkles
  },
  {
    title: "2. Agenda por WhatsApp",
    description: "Te confirmamos disponibilidad y precio al instante.",
    icon: Smartphone
  },
  {
    title: "3. Limpieza garantizada",
    description: "Recibe a tu profesional y disfruta tu tiempo libre.",
    icon: ShieldCheck
  }
];

export const CLIENT_SERVICES: ServiceItem[] = [
  {
    title: "Casas y Departamentos",
    description: "Servicio completo para todo tipo de hogar.",
    icon: Home
  },
  {
    title: "Limpieza por Horas",
    description: "Tú decides cuánto tiempo necesitas.",
    icon: Clock
  },
  {
    title: "Limpieza Recurrente",
    description: "Programa visitas semanales o quincenales.",
    icon: CalendarCheck
  },
  {
    title: "Limpieza Profunda",
    description: "Ideal para mudanzas o limpiezas de primavera.",
    icon: Brush
  }
];

export const CLIENT_INCLUDES = [
  "Barrer y trapear pisos",
  "Limpieza y desinfección de baños",
  "Limpieza de cocina (superficial)",
  "Limpieza de polvo en muebles",
  "Sacar la basura",
  "Tendidos de cama básicos"
];

export const CLIENT_BENEFITS = [
  { title: "Personal Verificado", desc: "Identidad y referencias comprobadas.", icon: UserCheck },
  { title: "Atención Rápida", desc: "Respuesta inmediata por WhatsApp.", icon: Zap },
  { title: "Garantía de Servicio", desc: "Si algo falla, enviamos un reemplazo.", icon: ShieldCheck },
  { title: "Precios Claros", desc: "Sin tarifas ocultas ni sorpresas.", icon: Banknote },
];

// Worker Content
export const WORKER_HERO = {
  title: "Trabajo de limpieza por horas en Zacatecas",
  subtitle: "Únete a nuestra red de confianza. Gana dinero con seguridad y flexibilidad.",
  cta: "Quiero registrarme para trabajar"
};

export const WORKER_BENEFITS = [
  { title: "Pago Puntual", desc: "Recibe tus ganancias de forma segura y constante.", icon: Banknote },
  { title: "Horarios Flexibles", desc: "Tú decides cuándo y cuánto quieres trabajar.", icon: Clock },
  { title: "Sin buscar clientes", desc: "Nosotros te enviamos los servicios a tu celular.", icon: Smartphone },
];

export const WORKER_STEPS: StepItem[] = [
  {
    title: "1. Registro",
    description: "Envíanos tus datos para iniciar el proceso.",
    icon: Smartphone
  },
  {
    title: "2. Verificación",
    description: "Validamos tu identidad y experiencia.",
    icon: UserCheck
  },
  {
    title: "3. Asignación",
    description: "Recibe alertas de trabajo en tu zona.",
    icon: MapPin
  },
  {
    title: "4. Pago",
    description: "Realiza el servicio y recibe tu pago.",
    icon: Banknote
  }
];

export const WORKER_REQUIREMENTS = [
  "Identificación oficial (INE) vigente",
  "Experiencia básica en limpieza",
  "Puntualidad y responsabilidad",
  "Celular con WhatsApp activo",
  "Comprobante de domicilio reciente"
];

export const WHATSAPP_LINK = "https://wa.me/524921234567"; // Placeholder Zacatecas number
export const PLACEHOLDER_IMG_CLIENT = "https://picsum.photos/800/600?grayscale&blur=2"; 
export const PLACEHOLDER_IMG_WORKER = "https://picsum.photos/800/600?grayscale";