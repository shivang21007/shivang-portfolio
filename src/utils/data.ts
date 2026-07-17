export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  link: string;
}

export const experience: Experience[] = [
  {
    role: "DevOps Engineer",
    company: "Octro Inc.",
    location: "Noida, India",
    period: "Sept 2024 — Present",
    current: true,
    achievements: [
      "Orchestrated Kubernetes production workloads using rolling deployments, HPA, and ingress controllers — achieving 99.9% uptime for microservices.",
      "Provisioned AWS infrastructure (EC2, S3, IAM, Route53) using Terraform, establishing IaC and reducing manual provisioning effort by 70%.",
      "Engineered CI/CD pipelines via GitHub Actions and GitOps workflows, cutting deployment time by 50% with automated, zero-downtime releases.",
      "Deployed centralized observability stack (Prometheus, Grafana, Loki, OpenTelemetry), reducing MTTR for production incidents by 40%.",
      "Streamlined infrastructure workflows using Python and Bash scripts, saving 10+ hours of manual work weekly. Implemented encrypted MySQL backups for disaster recovery.",
      "Integrated Trivy container scanning and compliance validations into pipelines, reducing security vulnerabilities by 80%.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SkillPulse",
    description:
      "Production-grade 3-tier app (HTML/CSS/JS, Golang/Gin, MySQL) on Kubernetes with fully automated CI/CD via GitHub Actions. Multi-stage Docker builds reduced frontend image from 92MB → 20MB, backend from 34MB → 12MB. Integrated security scanners (golangci-lint, Gitleaks, Trivy, Hadolint) as automated CI gates.",
    tech: ["Kubernetes", "Golang", "MySQL", "GitHub Actions", "Docker", "HPA"],
    type: "DevOps / CI-CD",
    featured: true,
    githubUrl: "https://github.com/shivang21007",
    liveUrl: "https://devops.shivanggupta.in:8443/",
  },
  {
    title: "2-Tier CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline for a React/Node.js app — automating build, scan, and deployment to VPS via Docker Compose using GitHub Actions. Embedded SAST (Snyk), dependency scanning, secret detection, and Trivy scanning. Remediated 19 High and 2 Critical vulnerabilities before production.",
    tech: ["React", "Node.js", "Docker Compose", "GitHub Actions", "Snyk", "Trivy"],
    type: "DevOps / Security",
    featured: true,
    githubUrl: "https://github.com/shivang21007",
    liveUrl: "https://devops.shivanggupta.in:8443/",
  },
  {
    title: "Number-Tracker",
    description:
      "Python-based phone number tracking and lookup tool. Most starred repository with community adoption and active contributions.",
    tech: ["Python", "Geolocation", "CLI"],
    type: "Open Source",
    githubUrl: "https://github.com/shivang21007/Number-Tracker",
    stars: 247,
  },
  {
    title: "ScanX",
    description:
      "Cross-platform system monitoring daemon that collects CPU, memory, disk, and network metrics with configurable alerting thresholds.",
    tech: ["TypeScript", "System Monitoring", "CLI"],
    type: "Infrastructure",
    githubUrl: "https://github.com/shivang21007/ScanX",
  },
  {
    title: "Self-DNS",
    description:
      "A custom DNS server built from scratch in Go, handling DNS query resolution with support for multiple record types.",
    tech: ["Golang", "DNS", "Networking"],
    type: "Networking",
    githubUrl: "https://github.com/shivang21007/Self-DNS",
  },
  {
    title: "TapeX",
    description:
      "LTO9 Tape Library management system for enterprise backup workflows with automated tape rotation and cataloging.",
    tech: ["TypeScript", "Storage", "Enterprise"],
    type: "Storage Ops",
    githubUrl: "https://github.com/shivang21007/TapeX",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Orchestration & Containers",
    icon: "🐳",
    items: ["Kubernetes", "Docker", "Docker Compose", "ArgoCD", "Helm"],
  },
  {
    category: "Cloud & IaC",
    icon: "☁️",
    items: ["AWS", "Terraform", "EC2", "S3", "IAM", "Route53"],
  },
  {
    category: "CI/CD & GitOps",
    icon: "🔄",
    items: ["GitHub Actions", "GitOps", "Rolling Deployments", "Zero-Downtime Releases"],
  },
  {
    category: "Observability",
    icon: "📊",
    items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Trivy"],
  },
  {
    category: "Languages & Scripting",
    icon: "⌨️",
    items: ["Golang", "Python", "Bash", "TypeScript", "JavaScript"],
  },
  {
    category: "Databases & Systems",
    icon: "🗄️",
    items: ["MySQL", "Redis", "Linux", "Distributed Systems"],
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
    link: "https://drive.google.com/file/d/1XcYqt_urzZP_FtRNoWHOjWTHc1xn9WD1/view?usp=sharing",
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    icon: "🌐",
    link: "https://drive.google.com/file/d/13Sf3IXjTkbYvjDhqdfduJULJ_sj3wW0T/view?usp=sharing",
  },
  {
    title: "IBM Data Science Certificates",
    issuer: "IBM",
    icon: "📊",
    link: "https://drive.google.com/file/d/1hquSA8G04vL5g-JOTGEENo38JnO46iiX/view?usp=sharing",
  },
  {
    title: "Certificate of Publication",
    issuer: "Research Journal",
    icon: "📝",
    link: "https://drive.google.com/file/d/1vXMzfvVXiWWmjUe5J-OQsPIxOijPTLes/view?usp=sharing",
  },
  {
    title: "Sky Scanner Virtual Internship",
    issuer: "Skyscanner",
    icon: "✈️",
    link: "https://drive.google.com/file/d/1jl16BD6h-DCXkTPntC3vlBpOD3K0lZiv/view?usp=sharing",
  },
];

export const personalInfo = {
  name: "Shivang Gupta",
  title: "DevOps & Site Reliability Engineer",
  company: "Octro Inc.",
  location: "Delhi, India",
  email: "shivanggupta2611@gmail.com",
  phone: "+918081260068",
  linkedin: "https://linkedin.com/in/shivang21007",
  github: "https://github.com/shivang21007",
  website: "https://shivanggupta.in",
  resumeUrl:
    "https://drive.google.com/file/d/1jDse5RHdQBAk1xwEfrdytt8Yt_HSYAcO/view?usp=sharing",
  summary:
    "DevOps & Site Reliability Engineer with hands-on experience in Kubernetes, Terraform, CI/CD, and AWS. Proven track record in building scalable cloud-native infrastructure, optimizing costs, and automating workflows to ensure highly reliable production systems.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "G.L. Bajaj Institute of Technology and Management, Greater Noida",
    period: "2021 — 2025",
  },
  stats: [
    { label: "Uptime Achieved", value: "99.9%" },
    { label: "Faster Deploys", value: "50%" },
    { label: "Less Manual Work", value: "70%" },
    { label: "Fewer Vulnerabilities", value: "80%" },
  ],
};