export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  iconName?: string;
  tag?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  type: 'International' | 'Verified' | 'Professional';
  description: string;
  skillsVerified: string[];
  credentialId: string;
  credentialUrl?: string;
  imageFallbackText?: string;
  badgeColor: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Web Dev' | 'Jaringan' | 'Server & DevOps';
  tags: string[];
  features: string[];
  architecture?: string;
  demoUrl?: string;
  githubUrl?: string;
  icon: string;
  accentColor: string;
  systemSpecs?: { [key: string]: string };
}

export interface EducationItem {
  period: string;
  school: string;
  major: string;
  description: string;
  skills: string[];
  status: string;
  achievements?: string[];
}
