
import React from 'react';

const HubSpotExpertise: React.FC = () => {
  const points = [
    { title: 'Google Vertex AI', desc: 'Creación y configuración de agentes conversacionales inteligentes para optimización de servicios.', icon: 'fa-solid fa-robot' },
    { title: 'HubSpot Marketing', desc: 'Certificación 2023. Administración de CRM, flujos de marketing y automatización.', icon: 'fa-brands fa-hubspot' },
    { title: 'WordPress Specialist', desc: 'Desarrollo de sitios corporativos complejos con administración de múltiples activos digitales.', icon: 'fa-brands fa-wordpress' },
    { title: 'SEO & Analytics', desc: 'Dominio de Google Analytics y Search Console para toma de decisiones basada en datos.', icon: 'fa-solid fa-chart-line' }
  ];

  return (
    <section id="hubspot" className="py-24 bg-pastel-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="p-1.5 bg-indigo-100 rounded-xl inline-block mb-6">
              <i className="fa-solid fa-wand-magic-sparkles text-indigo-600 text-2xl px-2"></i>
            </div>
            <h3 className="text-4xl font-outfit font-bold text-slate-900 mb-6">
              Donde la IA se encuentra con el Desarrollo Web
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Especializada en la convergencia tecnológica. Desde la administración avanzada de HubSpot hasta la implementación de IA generativa con Vertex AI para transformar la experiencia digital de las empresas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="bg-white/60 p-6 rounded-2xl border border-white">
                  <i className={`${p.icon} text-indigo-500 mb-4 text-xl block`}></i>
                  <h5 className="font-bold text-slate-800 mb-2">{p.title}</h5>
                  <p className="text-sm text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
             <div className="glass p-6 sm:p-8 rounded-[2rem] shadow-2xl relative z-10 w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <h4 className="font-bold text-slate-800 text-lg sm:text-xl">IA Agente Performance</h4>
                  <span className="text-[10px] sm:text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-bold whitespace-nowrap">VERTEX AI ACTIVE</span>
                </div>
                
                <div className="space-y-6">
                  <div className="w-full bg-slate-100 h-24 rounded-2xl flex items-end p-4 space-x-2">
                    {[60, 40, 75, 55, 90, 80, 85, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-indigo-400 rounded-t-lg transition-all hover:bg-indigo-600" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <p className="text-xl sm:text-2xl font-bold text-orange-600">HubSpot</p>
                      <p className="text-[10px] uppercase font-bold text-orange-400">Marketing Soft.</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">IA</p>
                      <p className="text-[10px] uppercase font-bold text-blue-400">Conversacional</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">Web</p>
                      <p className="text-[10px] uppercase font-bold text-purple-400">WordPress Exp.</p>
                    </div>
                  </div>
                </div>
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden sm:block" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSpotExpertise;
