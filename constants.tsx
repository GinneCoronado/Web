
import { Skill, Experience, Project } from './types';

export const COLORS = {
  primary: '#818cf8',
  secondary: '#f472b6',
  accent: '#34d399',
  bg: '#f8fafc'
};

export const SKILLS: Skill[] = [
  { name: 'WordPress', category: 'Frontend', icon: 'fa-brands fa-wordpress' },
  { name: 'HTML5 / CSS3', category: 'Frontend', icon: 'fa-brands fa-html5' },
  { name: 'JavaScript / PHP', category: 'Frontend', icon: 'fa-brands fa-js' },
  { name: 'Google Vertex AI', category: 'Backend', icon: 'fa-solid fa-brain' },
  { name: 'Agentes Conversacionales', category: 'Backend', icon: 'fa-solid fa-robot' },
  { name: 'HubSpot CRM/Marketing', category: 'HubSpot', icon: 'fa-brands fa-hubspot' },
  { name: 'Google Analytics', category: 'HubSpot', icon: 'fa-solid fa-chart-simple' },
  { name: 'Search Console', category: 'HubSpot', icon: 'fa-solid fa-magnifying-glass' },
  { name: 'Mailchimp', category: 'HubSpot', icon: 'fa-solid fa-envelope' },
  { name: 'Scrum / XP', category: 'Leadership', icon: 'fa-solid fa-users-gear' },
  { name: 'Gestión de Proyectos', category: 'Leadership', icon: 'fa-solid fa-clipboard-list' },
  { name: 'Análisis de Requerimientos', category: 'Leadership', icon: 'fa-solid fa-diagram-project' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Líder de Innovación',
    company: 'IntelliNext',
    period: 'Agosto 2025 - Actualidad',
    description: 'Liderazgo de iniciativas de innovación y transformación digital. Investigación e implementación de nuevas tecnologías. Creación y configuración de agentes conversacionales con IA usando Google Vertex AI. Análisis de requerimientos técnicos y funcionales. Coordinación de equipos y planificación de actividades.',
    technologies: ['Google Vertex AI', 'Transformación Digital', 'Liderazgo']
  },
  {
    role: 'Webmaster',
    company: 'IntelliNext',
    period: '2022 - Agosto 2025',
    description: 'Desarrollo y mantenimiento de sitios web corporativos en WordPress. Administración de múltiples sitios web y activos digitales. Configuración y administración de CRM HubSpot. Gestión de proyectos bajo metodología Scrum. Administración de Google Analytics y Search Console.',
    technologies: ['WordPress', 'HubSpot', 'Scrum', 'Analytics']
  },
  {
    role: 'Desarrolladora Web',
    company: 'Conocimiento Libre (México)',
    period: '2020 - 2022',
    description: 'Desarrollo de sitios web empresariales utilizando WordPress. Implementación de soluciones personalizadas y gestión de contenidos.',
    technologies: ['WordPress', 'PHP', 'CSS3', 'SEO']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'IA Agente Conversacional',
    description: 'Diseño e implementación de un agente inteligente utilizando Google Vertex AI para mejorar la atención al cliente automatizada.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tags: ['Google Vertex AI', 'NLP', 'Innovation']
  },
  {
    title: 'Ecosistema HubSpot CRM',
    description: 'Implementación y personalización integral de HubSpot para la gestión de ventas y marketing digital corporativo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['HubSpot', 'Marketing Automation', 'CRM']
  },
  {
    title: 'Plataforma Web Corporativa',
    description: 'Desarrollo de un sitio web escalable en WordPress con optimización avanzada de SEO y Google Search Console.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    tags: ['WordPress', 'SEO', 'Web Performance']
  }
];

// Added SYSTEM_PROMPT to define the behavior and context for the AI assistant
export const SYSTEM_PROMPT = `Eres el asistente virtual de Ginne Coronado, una experta en Desarrollo Web e Inteligencia Artificial.
Tu objetivo es ayudar a los visitantes a conocer su trayectoria profesional.
Información clave sobre Ginne:
- Cargo actual: Líder de Innovación en IntelliNext (desde Agosto 2025).
- Experiencia previa: Webmaster en IntelliNext (2022-2025), Desarrolladora Web en Conocimiento Libre (2020-2022).
- Formación: Ingeniera en Informática por la Universidad Nacional Experimental del Táchira (UNET), graduada en 2017.
- Especialidades: WordPress, CRM HubSpot (certificada), Inteligencia Artificial (Google Vertex AI), Metodologías ágiles (Scrum).
- Proyectos destacados: Agentes conversacionales con IA, Implementación de HubSpot CRM, Plataformas Web con WordPress.
Responde de manera profesional, amable y concisa en español.`;
