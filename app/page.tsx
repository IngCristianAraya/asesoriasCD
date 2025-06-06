'use client';

import './BenefitsAnimations.css';
import { useState, useEffect } from 'react';
import ContactForm from '../components/ui/ContactForm';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroBlobsBackground from "../components/ui/HeroBlobsBackground";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Zap, 
  TrendingUp,
  Lightbulb,
  Settings,
  Globe,
  Star,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Asesoría en Creación de Proyectos",
      description: "Transformamos tus ideas en proyectos viables con planificación estratégica y metodologías probadas.",
      features: [
        "Validación de ideas de negocio",
        "Planificación de etapas y cronograma",
        "Identificación de recursos necesarios",
        "Metodologías ágiles personalizadas"
      ],
      ideal: "Emprendedores, freelancers, startups"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Asesoría Estratégica para Negocios",
      description: "Optimizamos tu modelo de negocio y desarrollamos estrategias de crecimiento sostenible.",
      features: [
        "Análisis del modelo de negocio",
        "Definición de propuesta de valor",
        "Estrategias de crecimiento",
        "Optimización de procesos internos"
      ],
      ideal: "Pymes, emprendedores consolidados"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Consultoría en Transformación Digital",
      description: "Modernizamos tus procesos empresariales con tecnología y automatización inteligente.",
      features: [
        "Auditoría digital completa",
        "Automatización de procesos",
        "Integración de herramientas",
        "Capacitación en tecnologías"
      ],
      ideal: "Empresas tradicionales, todos los sectores"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Fundadora de TechStart",
      content: "Gracias a su asesoría, logré estructurar mi idea y lanzar mi startup en tiempo récord. Su metodología es excepcional.",
      rating: 5,
      image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Mendoza",
      role: "CEO de Innovacorp",
      content: "La transformación digital de nuestra empresa fue un éxito total. Aumentamos nuestra eficiencia en un 300%.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Rodríguez",
      role: "Directora de Marketing",
      content: "Su estrategia de negocio nos ayudó a expandirnos a nuevos mercados y duplicar nuestros ingresos en 6 meses.",
      rating: 5,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultados Medibles",
      description: "Establecemos KPIs claros y métricas de éxito para cada proyecto."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipo Experto",
      description: "Consultores certificados con más de 10 años de experiencia."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Implementación Rápida",
      description: "Metodologías ágiles que garantizan resultados en tiempo récord."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Soluciones Personalizadas",
      description: "Cada estrategia se adapta específicamente a tu negocio."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Analizamos tu situación actual y definimos objetivos claros."
    },
    {
      number: "02",
      title: "Estrategia Personalizada",
      description: "Desarrollamos un plan de acción específico para tu negocio."
    },
    {
      number: "03",
      title: "Implementación",
      description: "Ejecutamos las estrategias con acompañamiento constante."
    },
    {
      number: "04",
      title: "Seguimiento y Optimización",
      description: "Monitoreamos resultados y optimizamos continuamente."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">AsesoriasDigital</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Servicios</a>
                <a href="#proceso" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Proceso</a>
                <a href="#testimonios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Testimonios</a>
                <a href="#contacto" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  Contactar
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium">Servicios</a>
              <a href="#proceso" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium">Proceso</a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium">Testimonios</a>
              <a href="#contacto" className="block px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-center mx-3">
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-orange-200 via-white to-orange-100">
        {/* Fondo SVG animado */}
        {/* Fondo canvas animado de blobs */}
        <HeroBlobsBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Columna de texto */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                Transformamos tu negocio con estrategias digitales
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Impulsa tu negocio</span> al siguiente nivel
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl md:mx-0 mx-auto leading-relaxed font-semibold">
                Somos tu socio estratégico: obtén resultados medibles, asesoría personalizada y acceso a expertos que han transformado más de 500 empresas. ¡Haz que tu proyecto sea un caso de éxito!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <a href="#contacto" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold text-2xl flex items-center justify-center group shadow-lg hover:shadow-orange-300 outline-none focus:ring-4 focus:ring-orange-300 focus-visible:ring-4 focus-visible:ring-orange-400" aria-label="Solicitar asesoría gratuita" tabIndex={0} role="button">
                  ¡Quiero una asesoría gratuita!
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto md:mx-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Proyectos exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-gray-600">Satisfacción del cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                  <div className="text-gray-600">Años de experiencia</div>
                </div>
              </div>
            </div>
            {/* Columna de imagen */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=1200&q=90&format=webp"
                alt="Consultores analizando resultados"
                className="rounded-2xl shadow-2xl w-full max-w-xl object-cover"
                style={{ minHeight: 360, minWidth: 0 }}
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios de Asesoría
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para cada etapa de tu negocio, desde la ideación hasta la escalabilidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#servicio-${index}`}
                className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-orange-200"
                tabIndex={0}
                role="link"
                aria-label={`Ver detalles del servicio: ${service.title}`}
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 font-medium">
                  {service.description}
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-3">
                  <span className="text-xs text-orange-800 font-semibold">Ideal: {service.ideal}</span>
                </div>
                <span className="inline-flex items-center text-orange-500 font-semibold hover:underline">
                  Más detalles <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestras asesorías?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos experiencia, metodología y tecnología para garantizar el éxito de tu proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className={`relative group bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer animate-fade-in ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseMove={e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `perspective(600px) rotateY(${(x - rect.width / 2) / 18}deg) rotateX(${-(y - rect.height / 2) / 18}deg) scale(1.05)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 mb-6 shadow-lg animate-bounce-slow group-hover:animate-spin-slow">
          <span className="text-orange-500 text-4xl group-hover:text-orange-600 transition-colors duration-300">
            {benefit.icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {benefit.description}
        </p>
      </div>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl shadow-[0_0_40px_8px_rgba(255,156,62,0.14)]"></div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una metodología probada que garantiza resultados exitosos en cada proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {processSteps.map((step, index) => (
    <div
      key={index}
      className="relative group transition-transform duration-500 ease-out transform hover:scale-105 hover:z-10 animate-fade-in-up"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg group-hover:shadow-orange-200 transition-shadow duration-300 border-4 border-white group-hover:border-orange-400">
          {step.number}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {step.description}
        </p>
      </div>
      {/* Conector visual animado entre pasos */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-16 -translate-y-1/2">
          <div className="w-full h-1 bg-gradient-to-r from-orange-200 to-orange-400 rounded-full animate-pulse"></div>
        </div>
      )}
      {/* Efecto de resplandor activo al hacer hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl shadow-orange-200"></div>
    </div>
  ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-br from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Historias reales de transformación y éxito empresarial
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      {/* Logos de clientes/casos de éxito */}
      <img src="/logos/cliente1.webp" alt="Logo Cliente 1" className="h-10 object-contain" loading="lazy" width={100} height={40} />
      <img src="/logos/cliente2.webp" alt="Logo Cliente 2" className="h-10 object-contain" loading="lazy" width={100} height={40} />
      <img src="/logos/cliente3.webp" alt="Logo Cliente 3" className="h-10 object-contain" loading="lazy" width={100} height={40} />
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <div className="text-center">
          <img 
            src={testimonials[activeTestimonial].image}
            alt={testimonials[activeTestimonial].name}
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-orange-100"
          />
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
            "{testimonials[activeTestimonial].content}"
          </blockquote>
          <div>
            <div className="font-bold text-gray-900 text-lg">
              {testimonials[activeTestimonial].name}
            </div>
            <div className="text-orange-500 font-medium">
              {testimonials[activeTestimonial].role}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
              index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            aria-label={`Ver testimonio ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos acelerar el crecimiento de tu empresa
          </p>
          <a href="#contacto" className="bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center shadow-lg hover:shadow-xl">
            Agendar consulta gratuita
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a alcanzar tus objetivos empresariales
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@creciendodigital.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Celular</div>
                    <div className="text-gray-600">906684284</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600">Calle Santa Paula, Lima</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">AsesoriasDigital</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Transformamos negocios a través de asesorías estratégicas, creación de proyectos y consultoría digital. 
                Tu éxito es nuestro compromiso.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Creación de Proyectos</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Estrategia Empresarial</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Transformación Digital</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@creciendodigital.com</li>
                <li>906684284</li>
                <li>Calle Santa Paula, Lima</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AsesoriasDigital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}