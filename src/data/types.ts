export interface QuestCaseStudy {
  problem: string;
  approach: string;
  tools: string[];
  challenges: string[];
  result: string;
}

export interface Project {
  id: string;
  questNumber: number;
  title: string;
  tagline: string;
  category: "Data / Machine Learning" | "Software Architecture / Concurrency" | "Product / Frontend";
  icon: "energy" | "radar" | "focus";
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string | null;
  caseStudy: QuestCaseStudy;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  gameLabel: string;
  icon: "scroll" | "wrench" | "flask" | "gem";
  items: SkillItem[];
}

export interface AcademyResult {
  module: string;
  grade: "High Distinction" | "Distinction";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  detail?: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organisation: string;
  period: string;
  bullets: string[];
  transferableValue: string;
}

export interface SideQuest {
  id: string;
  title: string;
  period: string;
  organisation?: string;
  bullets: string[];
}
