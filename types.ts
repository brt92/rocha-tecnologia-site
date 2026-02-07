
export enum BusinessPillar {
  IT_CYBER = 'ti-cyberseguranca',
  DEV_AUTO = 'desenvolvimento-automacao',
  AI_CONSULTING = 'consultoria-ia',
  INFRA_TECH = 'infraestrutura-tecnologia',
  TECHNICAL_SUPPORT = 'assistencia-tecnica'
}

export interface Service {
  id: string;
  pillar: BusinessPillar;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Plan {
  id: string;
  name: string;
  priceTag: string;
  description: string;
  features: string[];
  sla: string;
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  pillar: BusinessPillar;
  title: string;
  client: string;
  result: string;
  image: string;
}
