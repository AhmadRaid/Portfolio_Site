export const SKILLS_DATA = {
  backend: {
    title: "Backend Technologies",
    icon: "Server",
    color: "green",
    skills: ["Node.js", "Express.js", "Fastify", "NestJS", "TypeScript", "JavaScript"],
  },
  database: {
    title: "قواعد البيانات",
    icon: "Database",
    color: "blue",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  },
  cloud: {
    title: "الخدمات السحابية",
    icon: "Cloud",
    color: "purple",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices"],
  },
  tools: {
    title: "أدوات التطوير",
    icon: "Code",
    color: "orange",
    skills: ["Git", "Jest", "Postman", "Swagger", "GraphQL"],
  },
} as const

export const PROJECTS_DATA = [
  {
    id: "ecommerce",
    title: "منصة التجارة الإلكترونية",
    description: "API شامل لمنصة تجارة إلكترونية مع إدارة المنتجات والطلبات والمدفوعات",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe API"],
    status: "completed",
    features: ["يدعم 10,000+ مستخدم متزامن"],
    githubUrl: "#",
    liveUrl: "#",
  },
  // ... more projects
] as const

export const EXPERIENCE_DATA = [
  {
    id: "senior-nodejs",
    title: "مطور Node.js أول",
    company: "شركة التقنيات المتقدمة",
    period: "2022 - الآن",
    achievements: [
      "قيادة فريق من 5 مطورين في بناء منصة تجارة إلكترونية تخدم أكثر من 50,000 مستخدم",
      "تحسين أداء النظام بنسبة 40% باستخدام تقنيات التخزين المؤقت وتحسين قواعد البيانات",
      "تطوير أكثر من 20 API مع معايير الأمان العالية ومعدل استجابة أقل من 200ms",
      "تطبيق منهجية DevOps وأتمتة عمليات النشر مما قلل وقت النشر بنسبة 60%",
    ],
  },
  // ... more experience
] as const
