
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-[100px] pb-16 lg:pt-[150px] lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-10 lg:opacity-20 pointer-events-none">
        <div className="absolute top-20 right-0 lg:right-[-10%] w-64 h-64 lg:w-96 lg:h-96 bg-pastel-blue rounded-full blur-3xl translate-x-1/2 lg:translate-x-0"></div>
        <div className="absolute bottom-20 left-0 lg:left-auto lg:right-[10%] w-64 h-64 lg:w-80 lg:h-80 bg-pastel-pink rounded-full blur-3xl -translate-x-1/2 lg:translate-x-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-semibold text-xs sm:text-sm mb-6 border border-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Líder de Innovación • Especialista Web & IA</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-outfit font-bold text-slate-900 leading-tight mb-6 break-words">
              Impulsando el futuro con <span className="gradient-text">IA & Estrategia Web</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ingeniera en Informática enfocada en la entrega de soluciones digitales de alto impacto. Especialista en WordPress, CRM HubSpot y creación de agentes inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="mailto:ginne.carol@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center">
                Contactar Ahora
                <i className="fa-solid fa-envelope ml-2"></i>
              </a>
              <a href="https://linkedin.com/in/ginne-coronado/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center">
                <i className="fa-brands fa-linkedin mr-2 text-indigo-600"></i>
                LinkedIn
              </a>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:inline-flex lg:items-center lg:space-x-12 text-slate-400">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-slate-800">UNET</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Alumna 2017</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-slate-800">Vertex IA</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Especialista</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-slate-800">HubSpot</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Certificada</span>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-indigo-100 rounded-[2.5rem] sm:rounded-[3rem] rotate-6"></div>
              <div className="absolute inset-0 bg-pink-50 rounded-[2.5rem] sm:rounded-[3rem] -rotate-3"></div>
              <img 
                //src="https://github.com/GinneCoronado/web/blob/main/PerfilGinne.jpeg" 
                src="https://media.discordapp.net/attachments/829569170773508117/1456801294336524288/PerfilGinne.jpeg?ex=6959af6e&is=69585dee&hm=c7b4c4eb75a1a137cf367a3b72b4dc4d8976fe307d1e3c7e28b038e947e96180&=&format=webp&width=616&height=823"
                alt="Ginne Coronado" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl z-10"
              />
              
              {/* Badges */}
              <div className="hidden sm:block absolute -top-6 -right-6 glass p-3 sm:p-4 rounded-2xl shadow-xl z-20 float">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <i className="fa-brands fa-hubspot text-orange-500 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">HubSpot</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">Academy</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-6 -left-6 glass p-3 sm:p-4 rounded-2xl shadow-xl z-20 float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <i className="fa-solid fa-brain text-indigo-500 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">IA</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
