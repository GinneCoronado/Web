
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'HubSpot', 'Leadership'];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4">Core Skills</h2>
          <h3 className="text-4xl lg:text-5xl font-outfit font-bold text-slate-900 mb-6">Especialización Técnica & Liderazgo</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Un equilibrio perfecto entre arquitectura de software moderna y la optimización de procesos de negocio a través del ecosistema CRM más potente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="font-outfit font-bold text-xl text-slate-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                {cat}
              </h4>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <i className={`${skill.icon} text-indigo-400`}></i>
                    </div>
                    <span className="text-slate-600 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
