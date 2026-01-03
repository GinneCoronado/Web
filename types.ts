
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'HubSpot' | 'Soft Skills' | 'Leadership';
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

// Added Message interface for chat history
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
