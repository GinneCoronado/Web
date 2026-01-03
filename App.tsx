
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import HubSpotExpertise from './components/HubSpotExpertise';
import ScrollToTop from './components/ScrollToTop';
import { EXPERIENCES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      
      <main className="w-full">
        {/* Section: Home */}
        <Hero />
        
        {/* Section: Experience */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4">Experiencia Profesional</h2>
                <h3 className="text-4xl font-outfit font-bold text-slate-900">Liderazgo & Transformación Digital</h3>
              </div>
              <div className="text-slate-500 max-w-xs leading-relaxed">
                Ingeniera en Informática (UNET) enfocada en la investigación de nuevas tecnologías y soluciones de alto impacto.
              </div>
            </div>
            
            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 md:pl-0">
                  {/* Timeline Line (Mobile Only) */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
                  <div className="absolute left-2.5 top-2 w-3.5 h-3.5 bg-indigo-500 rounded-full border-4 border-white md:hidden"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/4 pt-1">
                      <span className="text-indigo-600 font-bold text-lg">{exp.period}</span>
                      <p className="text-slate-400 font-medium uppercase tracking-widest text-xs mt-1">{exp.company}</p>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                        <h4 className="text-2xl font-outfit font-bold text-slate-800 mb-4">{exp.role}</h4>
                        <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase tracking-wider">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <Skills />
        
        {/* Section: HubSpot & IA */}
        <HubSpotExpertise />

        {/* Simplified Call to Action / Education */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/10 skew-x-12"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-4xl font-outfit font-bold mb-8">Educación & Certificaciones</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Ingeniería en Informática</h5>
                      <p className="text-slate-400">Universidad Nacional Experimental del Táchira (UNET) - 2017</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                      <i className="fa-brands fa-hubspot"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">Marketing Hub Software</h5>
                      <p className="text-slate-400">HubSpot Academy - 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-outfit font-bold mb-6">¿Interesado en colaborar?</h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Actualmente estoy abierta a reubicación y proyectos de innovación remotos. Conectemos para explorar cómo puedo aportar valor a tu equipo.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="mailto:ginne.carol@gmail.com" className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-900/40">
                    Contactar por Email
                  </a>
                  <a href="https://linkedin.com/in/ginne-coronado/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-bold transition-all">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm font-outfit">
              G
            </div>
            <span className="font-outfit font-bold text-lg tracking-tight">
              Ginne <span className="text-indigo-500">Coronado</span>
            </span>
          </div>
          
          <p className="text-slate-400 text-sm">© 2025 Ginne Coronado. Especialista en Web & Inteligencia Artificial.</p>
          
          <div className="flex space-x-6 text-slate-400 text-xs">
            <span>Español: Nativo</span>
            <span className="h-4 w-px bg-slate-200"></span>
            <span>Inglés: Básico</span>
          </div>
        </div>
      </footer>

      {/* Floating UI Elements */}
      <ScrollToTop />
    </div>
  );
};

export default App;
