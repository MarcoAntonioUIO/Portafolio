export type ProjectCategory = "Desarrollo web" | "E-commerce" | "Aplicación";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  sector: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  role: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  accent: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}
