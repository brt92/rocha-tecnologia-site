
import { BusinessPillar, Service, Plan, CaseStudy } from './types';

export const PILLAR_DATA = {
  [BusinessPillar.IT_CYBER]: {
    title: 'TI & Cybersegurança',
    subtitle: 'Infraestrutura e Proteção de Dados',
    color: 'blue',
    description: 'Gestão proativa e segurança multicamada para sua operação nunca parar.'
  },
  [BusinessPillar.DEV_AUTO]: {
    title: 'Desenvolvimento & Automação',
    subtitle: 'Software e Eficiência Digital',
    color: 'indigo',
    description: 'Sistemas sob medida e automações que transformam processos manuais em escala.'
  },
  [BusinessPillar.INFRA_TECH]: {
    title: 'Infraestrutura & Projetos',
    subtitle: 'Engenharia e Tecnologia Aplicada',
    color: 'sky',
    description: 'Projetos de cabeamento, elétrica, CFTV e automação para ambientes comerciais e residenciais.'
  },
  [BusinessPillar.AI_CONSULTING]: {
    title: 'Consultoria em IA',
    subtitle: 'Estratégia e Futuro dos Negócios',
    color: 'emerald',
    description: 'Introdução estruturada da Inteligência Artificial na cultura e processos da sua empresa.'
  }
};

export const SERVICES: Service[] = [
  // TI
  {
    id: 'ti-1',
    pillar: BusinessPillar.IT_CYBER,
    title: 'Gestão de TI 360º',
    description: 'Terceirização completa do departamento de TI.',
    icon: 'BarChart3',
    features: ['Monitoramento 24/7', 'Inventário de Ativos', 'Suporte VIP']
  },
  {
    id: 'ti-2',
    pillar: BusinessPillar.IT_CYBER,
    title: 'Segurança & Firewall',
    description: 'Proteção contra invasões e sequestro de dados.',
    icon: 'Shield',
    features: ['Firewall UTM', 'MFA Obrigatório', 'Proteção Endpoint']
  },
  // DEV
  {
    id: 'dev-1',
    pillar: BusinessPillar.DEV_AUTO,
    title: 'Sistemas Web & ERP',
    description: 'Plataformas customizadas para sua regra de negócio.',
    icon: 'Terminal',
    features: ['Next.js / Supabase', 'Dashboards Real-time', 'Multi-tenant']
  },
  {
    id: 'dev-2',
    pillar: BusinessPillar.DEV_AUTO,
    title: 'WhatsApp & bots',
    description: 'Multiatendimento e automação de vendas.',
    icon: 'MessageSquare',
    features: ['Integração API Oficial', 'Agentes de Triagem', 'Fluxos Complexos']
  },
  // IA
  {
    id: 'ia-1',
    pillar: BusinessPillar.AI_CONSULTING,
    title: 'Diagnóstico de IA',
    description: 'Mapeamento de onde a IA pode gerar mais lucro.',
    icon: 'Search',
    features: ['Audit de Dados', 'ROI de Implementação', 'Roadmap de Adoção']
  },
  {
    id: 'ia-2',
    pillar: BusinessPillar.AI_CONSULTING,
    title: 'Treinamento de Equipes',
    description: 'Ensine seu time a usar IA com ética e produtividade.',
    icon: 'Users',
    features: ['Engenharia de Prompt', 'Workshops Práticos', 'Cultura de Inovação']
  }
];

export const PLANS: Plan[] = [
  {
    id: 'contract-1',
    name: 'TI Essencial',
    priceTag: 'Sob Consulta',
    description: 'Suporte remoto e monitoramento básico.',
    features: ['Suporte 8x5', 'Antivírus Enterprise', 'Cloud Backup 100GB'],
    sla: '4h Úteis'
  },
  {
    id: 'contract-2',
    name: 'TI Pro + Automação',
    priceTag: 'Mais Procurado',
    description: 'Gestão completa e fluxos de automação n8n.',
    features: ['Suporte 24/7', 'Gestão de Firewall', 'Workflow Automatizado', 'Cloud Backup 500GB'],
    sla: '2h Úteis',
    isPopular: true
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    pillar: BusinessPillar.IT_CYBER,
    title: 'Migração Cloud Segura',
    client: 'Logística Global',
    result: 'Redução de 30% em custos de hardware.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-2',
    pillar: BusinessPillar.DEV_AUTO,
    title: 'Automação de Atendimento',
    client: 'Rede de Clínicas',
    result: '85% dos agendamentos feitos por IA.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
];
