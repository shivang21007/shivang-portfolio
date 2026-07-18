import { useEffect, useRef, useState, useCallback } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ChevronDown,
  Star,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import {
  experience,
  projects,
  skills,
  certifications,
  personalInfo,
} from "../utils/data";

/* ===== Scroll-triggered fade-in hook ===== */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".fade-in-up");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ===== Typing animation hook ===== */
function useTypingAnimation(words: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

/* ===== NAV COMPONENT ===== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg font-bold text-gradient-cyan"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          SG
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[var(--accent-cyan)] text-[var(--bg-primary)] hover:shadow-[0_0_20px_var(--accent-cyan-glow)] transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-[var(--glass-border)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="block text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[var(--accent-cyan)] text-[var(--bg-primary)] mt-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

/* ===== MAIN PAGE ===== */
const Index: React.FC = () => {
  const aboutRef = useFadeIn();
  const expRef = useFadeIn();
  const projectsRef = useFadeIn();
  const skillsRef = useFadeIn();
  const certsRef = useFadeIn();
  const contactRef = useFadeIn();

  const typedText = useTypingAnimation(
    ["DevOps Engineer", "Site Reliability Engineer", "Cloud Architect", "Infrastructure Builder"],
    80,
    2500
  );

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="bg-grid-pattern" />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-24">
        <div className="max-w-4xl mx-auto text-center transform -translate-y-6 md:-translate-y-10">
          {/* Status badge */}
          <div className="hero-animate hero-animate-delay-1 mb-6">
            <span className="glass-badge inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--accent-green)] rounded-full" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="hero-animate hero-animate-delay-2 text-hero font-display font-bold text-[var(--text-primary)] mb-4">
            Shivang{" "}
            <span className="text-gradient-cyan">Gupta</span>
          </h1>

          {/* Typing subtitle */}
          <div className="hero-animate hero-animate-delay-3 mb-6">
            <p className="text-xl md:text-2xl font-display font-medium text-[var(--text-muted)]">
              <span className="text-[var(--accent-violet)]">&gt;</span>{" "}
              <span className="typing-cursor">{typedText}</span>
            </p>
          </div>

          {/* Summary */}
          <p className="hero-animate hero-animate-delay-4 text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-10">
            Building scalable cloud-native infrastructure at{" "}
            <span className="text-[var(--accent-cyan)] font-semibold">
              Octro Inc.
            </span>{" "}
            — Kubernetes, Terraform, CI/CD, and AWS.
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-animate-delay-5 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-display font-semibold text-sm hover:shadow-[0_0_30px_var(--accent-cyan-glow)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore My Work
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-badge font-display font-semibold text-sm text-[var(--text-primary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Pinned Scroll indicator at standard viewport bottom */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20 cursor-pointer group"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors">scroll</span>
          <ChevronDown className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors" />
        </a>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative z-10 py-24 px-6" ref={aboutRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              About Me
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Summary */}
            <div className="lg:col-span-3 fade-in-up">
              <div className="glass-card-static p-8">
                <p className="text-[var(--text-secondary)] leading-relaxed text-base mb-6">
                  {personalInfo.summary}
                </p>

                {/* Info items */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-dim)] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-faint)]">Location</p>
                      <p className="text-sm text-[var(--text-primary)]">{personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-dim)] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-faint)]">Email</p>
                      <p className="text-sm text-[var(--text-primary)]">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-violet-dim)] flex items-center justify-center">
                      <Terminal className="w-4 h-4 text-[var(--accent-violet)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-faint)]">Role</p>
                      <p className="text-sm text-[var(--text-primary)]">{personalInfo.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-violet-dim)] flex items-center justify-center">
                      <span className="text-sm">🎓</span>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-faint)]">Education</p>
                      <p className="text-sm text-[var(--text-primary)]">{personalInfo.education.degree}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-card stat-card p-6 text-center fade-in-up"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-3xl font-display font-bold text-gradient-cyan mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="relative z-10 py-24 px-6" ref={expRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              Experience
            </h2>
            <div className="section-divider" />
          </div>

          {experience.map((exp, i) => (
            <div key={i} className="relative pl-10 fade-in-up">
              <div className="timeline-line" />
              <div className="flex items-start gap-4 mb-8">
                <div className="timeline-dot mt-2" />
                <div className="glass-card-static p-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--accent-cyan)] font-medium">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="glass-badge text-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-green)] rounded-full" />
                          Current
                        </span>
                      )}
                      <span className="text-sm text-[var(--text-muted)]">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                      >
                        <span className="text-[var(--accent-cyan)] mt-1 flex-shrink-0">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-24 px-6" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              Projects
            </h2>
            <div className="section-divider" />
            <p className="text-[var(--text-muted)] max-w-lg mx-auto">
              Production systems, open-source tools, and infrastructure experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="glass-card group p-6 fade-in-up glow-cyan-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-[var(--accent-violet)] bg-[var(--accent-violet-dim)] px-2.5 py-1 rounded-full">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.stars && (
                      <span className="flex items-center gap-1 text-xs text-[var(--accent-amber)]">
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-xs font-medium text-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)] px-2.5 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border border-[var(--glass-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-24 px-6" ref={skillsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              Skills & Stack
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, i) => (
              <div
                key={category.category}
                className="glass-card p-6 fade-in-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-sm font-display font-bold text-[var(--text-primary)]">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-[var(--accent-cyan-dim)] text-[var(--accent-cyan)] border border-[rgba(34,211,238,0.1)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="relative z-10 py-24 px-6" ref={certsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              Certifications
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => {
              const isClickable = cert.link && cert.link !== "#";
              const CardContent = (
                <>
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-dim)] flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <h3 className="text-sm font-display font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="text-[10px] text-[var(--text-faint)] mt-1 font-mono break-all">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {isClickable && (
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  )}
                </>
              );

              return isClickable ? (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group p-6 text-center fade-in-up glow-cyan-hover block cursor-pointer"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {CardContent}
                </a>
              ) : (
                <div
                  key={cert.title}
                  className="glass-card-static group p-6 text-center fade-in-up block hover:border-[var(--glass-border-hover)] transition-all duration-350"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-24 px-6" ref={contactRef}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-section-title font-display font-bold text-[var(--text-primary)] mb-3">
              Let's Connect
            </h2>
            <div className="section-divider" />
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Interested in working together or have a question? Reach out through any of these channels.
            </p>
          </div>

          <div className="glass-card-static p-8 fade-in-up">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-cyan-dim)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-faint)]">Email</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-green-dim)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[var(--accent-green)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-faint)]">Phone</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-violet-dim)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-[var(--accent-violet)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-faint)]">LinkedIn</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    shivang21007
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-[var(--text-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-faint)]">GitHub</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    shivang21007
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors group sm:col-span-2"
                onClick={(e) => e.preventDefault()}
              >
                <div className="w-11 h-11 rounded-lg bg-[rgba(251,191,36,0.1)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-amber)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-faint)]">Location</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {personalInfo.location}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-[var(--glass-border)] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-faint)]">
            © {new Date().getFullYear()} Shivang Gupta
          </p>
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[var(--text-faint)] hover:text-[var(--accent-cyan)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;