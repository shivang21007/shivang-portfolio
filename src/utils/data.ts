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
  credentialId?: string;
  tutor?: string;
  date?: string;
  expiry?: string;
}

export interface GravityGridConfig {
  gridGap: number;
  influenceRadius: number;
  gravityStrength: number;
  glowOpacity: number;
  minStarInterval: number;
  maxStarInterval: number;
}

export interface TypingConfig {
  titles: string[];
  speed: number;
  pause: number;
}

export const experience: Experience[] = [
  {
    role: "DevOps Engineer",
    company: "Octro Inc.",
    location: "Noida, India",
    period: "Sept 2024 — Present",
    current: true,
    achievements: [
      "Designed and implemented a GitOps-based CI/CD platform for a 55+ microservice Java Spring Boot gaming application, replacing a legacy manual Tomcat-based deployment workflow with GitLab CI, Docker, AWS ECR, Argo CD, and Kubernetes, cutting deployment time from 1-2 hours to under 20 minutes.",
      "Automated end-to-end delivery on merges to main: building and scanning Docker images, publishing to ECR, updating Kubernetes manifests, and triggering Argo CD syncs, eliminating manual packaging and deployment steps.",
      "Containerized Spring Boot services and deployed workloads on an on-premises kubeadm cluster using rolling updates, liveness/readiness probes, ingress routing, resource limits, and autoscaling for reliable, zero-downtime releases.",
      "Hardened the delivery pipeline with SAST, SCA, secret detection, Dockerfile linting, and Trivy image scanning as OWASP Top 10-aligned quality gates, and centralized application secret management across environments.",
      "Provisioned AWS infrastructure across EC2, S3, IAM, and Route53 using reusable Terraform modules with remote state (S3 backend + DynamoDB locking), reducing manual provisioning and configuration effort by 70%.",
      "Built centralized observability with Prometheus, Alertmanager, Grafana, Loki, and OpenTelemetry across Kubernetes and application workloads, reducing MTTR by 40% through unified metrics, logs, traces, and alerting.",
      "Collaborated with backend engineers to modernize deployment workflows for a distributed platform built on WebSockets, RabbitMQ, MongoDB, Redis, and ZooKeeper, improving release reliability and developer productivity."
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SkillPulse -- Production Kubernetes Platform",
    description:
      "Built and deployed a live production 3-tier application (HTML/CSS/JS, Golang/Gin, MySQL) on Kubernetes, delivered end-to-end through a fully automated GitHub Actions source-to-production pipeline. Optimized Docker builds using multi-stage images and scratch runtime images, reducing frontend image size from 92MB to 20MB and backend image size from 34MB to 12MB. Implemented rolling deployments, HPA autoscaling, service exposure, and security gates with golangci-lint, Gitleaks, govulncheck, Hadolint, and Trivy.",
    tech: ["Kubernetes", "Golang", "MySQL", "GitHub Actions", "Docker", "HPA"],
    type: "DevOps / CI-CD",
    featured: true,
    githubUrl: "https://github.com/shivang21007",
    liveUrl: "https://devops.shivanggupta.in:8443/",
  },
  {
    title: "Automated DevSecOps Pipeline",
    description:
      "Built an end-to-end GitHub Actions pipeline for a React/Node.js application, automating build, scanning, image publishing, and VPS deployment via Docker Compose for hands-off releases. Embedded SAST, dependency scanning, secret detection, Dockerfile linting, and Trivy gates, remediating 19 High and 2 Critical vulnerabilities by hardening base images and dependencies.",
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
    title: "Self-DNS",
    description:
      "A custom DNS server built from scratch in Go, handling DNS query resolution with support for multiple record types.",
    tech: ["Golang", "DNS", "Networking"],
    type: "Networking",
    githubUrl: "https://github.com/shivang21007/Self-DNS",
  },
  {
    title: "ScanX",
    description:
      "Cross-platform system monitoring daemon that collects CPU, memory, disk, and network metrics with configurable alerting thresholds.",
    tech: ["TypeScript", "System Monitoring", "CLI"],
    type: "Infrastructure",
    githubUrl: "https://github.com/shivang21007/ScanX",
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Orchestration & Containers",
    icon: "🐳",
    items: ["Kubernetes", "kubeadm", "Docker", "Helm", "Argo CD"],
  },
  {
    category: "Cloud & IaC",
    icon: "☁️",
    items: ["AWS (EC2, IAM, VPC, S3, Route53, ECR, CloudWatch, ALB)", "Terraform", "Docker Compose"],
  },
  {
    category: "CI/CD & GitOps",
    icon: "🔄",
    items: ["GitLab CI", "GitHub Actions", "Jenkins", "GitOps"],
  },
  {
    category: "Observability",
    icon: "📊",
    items: ["Prometheus", "Alertmanager", "Grafana", "Loki", "OpenTelemetry"],
  },
  {
    category: "DevSecOps & Scripting",
    icon: "🛡️",
    items: ["SAST", "SCA", "Trivy", "Snyk", "Gitleaks", "Hadolint", "Vault", "OWASP", "Python", "Bash", "Git"],
  },
  {
    category: "Data & Messaging",
    icon: "🗄️",
    items: ["MySQL", "MongoDB", "Redis", "RabbitMQ", "ZooKeeper"],
  },
];

export const certifications: Certification[] = [
  {
    title: "Certified DevOps Engineer Associate",
    issuer: "TrainWithShubham",
    icon: "🚀",
    link: "https://credentials.certdirectory.io/verify/CRD-8FFHEZGG",
    credentialId: "CRD-8FFHEZGG",
    tutor: "Shubham Londhe",
    date: "May 2026",
    expiry: "May 2030",
  },
  {
    title: "Docker: Containerization for Modern Development",
    issuer: "Codedamn",
    icon: "🐳",
    link: "#",
    credentialId: "f688538056b4aa24ccf54f6a7c30aecc3f73d97c",
    tutor: "Piyush Garg",
    date: "Oct 25, 2023",
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS / Forage",
    icon: "🏗️",
    link: "#",
    credentialId: "kqBDR2y88n8rqoJAw",
    tutor: "Tom Brunskill (CEO)",
    date: "Sept 28, 2023",
  },
  {
    title: "AWS Beginner to Intermediate: EC2, IAM, ELB, ASG, Route 53",
    issuer: "Udemy / YouAccel",
    icon: "🛡️",
    link: "#",
    credentialId: "UC-0b18ee44-4e51-41de-b31a-e75fb3fcd941",
    tutor: "YouAccel Training",
    date: "Aug 17, 2023",
  },
  {
    title: "Tech-A-Thon 3.0 Hackathon Participation",
    issuer: "iNeuron",
    icon: "🏆",
    link: "#",
    tutor: "Sudhanshu Kumar & Krish Naik",
    date: "Oct 2023",
  },
];

export const personalInfo = {
  name: "Shivang Gupta",
  title: "DevOps & Site Reliability Engineer",
  company: "Octro Inc.",
  location: "Delhi, India",
  email: "shivanggupta2611@gmail.com",
  phone: "+918081260068",
  linkedin: "https://www.linkedin.com/in/shivang21007/",
  github: "https://github.com/shivang21007",
  website: "https://shivanggupta.in",
  resumeUrl: "https://drive.google.com/file/d/1vQcmlgQJ312IfzrEaYplXM-NKl_kX9Pk/view?usp=sharing",
  summary:
    "DevOps Engineer with hands-on experience building GitOps-based CI/CD platforms, Kubernetes infrastructure, and cloud automation for distributed systems. Experienced in AWS, Terraform, observability, and DevSecOps, with a focus on reliable software delivery and production platform engineering.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "G.L. Bajaj Institute of Technology and Management, Greater Noida",
    period: "2021 — 2025",
  },
  stats: [
    { label: "Uptime Achieved", value: "99.9%" },
    { label: "Faster Deploys", value: "80%" },
    { label: "Less Manual Work", value: "70%" },
    { label: "Fewer Vulnerabilities", value: "80%" },
  ],
};

export const gravityGridConfig: GravityGridConfig = {
  gridGap: 55,          // Distance between grid lines (in pixels)
  influenceRadius: 800, // Radius of gravity influence (in pixels)
  gravityStrength: 40,  // Pull strength/weight (lower values make it lighter, default was 65)
  glowOpacity: 0.10,    // Mouse hover glow intensity/opacity (e.g. 0.07 = 7% opacity)
  minStarInterval: 2,  // Minimum time between shooting stars (in seconds)
  maxStarInterval: 6,  // Maximum time between shooting stars (in seconds, e.g. cap at 120s / 2 min)
};

export const typingConfig: TypingConfig = {
  titles: [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Architect",
    "Infrastructure Builder"
  ],
  speed: 80,   // Delay between typing individual letters (in milliseconds)
  pause: 2500, // Delay before beginning to delete/backspace the finished word (in milliseconds)
};