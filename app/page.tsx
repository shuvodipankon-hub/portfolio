"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Mail, MapPin, MessageCircle, MoonStar, Phone, SunMedium } from "lucide-react";
import profile from "@/content/profile.json";
import serviceData from "@/content/services.json";
import processData from "@/content/process.json";
import skillData from "@/content/skills.json";
import projectData from "@/content/projects.json";
import timelineData from "@/content/timeline.json";
import siteData from "@/content/site.json";

const services = serviceData.items;
const processSteps = processData.steps;
const skillGroups = skillData.groups;
const projects = projectData.items;
const workTimeline = timelineData.work;
const educationTimeline = timelineData.education;

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : prefersDark;
  });
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("00:00");
  const [year, setYear] = useState(2026);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-BD", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const current = new Date();
      setTime(formatter.format(current));
      setYear(current.getFullYear());
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">Suvodip</span>
          <span className="brand-sub">Chandra Ankon</span>
        </div>

        <div className="top-meta">
          <span className="live-dot" aria-hidden="true" />
          <span>{time}</span>
          <span className="location-inline">
            <MapPin size={14} />
            Sylhet, Bangladesh
          </span>
        </div>

        <div className="top-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((current) => !current)}
            aria-label="Toggle theme"
            aria-pressed={darkMode}
          >
            {darkMode ? <SunMedium size={16} /> : <MoonStar size={16} />}
          </button>
          <a className="top-cta" href="#contact">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <aside className="rail" aria-label="Section navigation">
        {siteData.nav.map((item, index) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="rail-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="rail-line" aria-hidden="true" />
            <span className="rail-label">{item}</span>
          </a>
        ))}
      </aside>

      <section id="hero" className="hero section-block">
        <div className="hero-copy">
          <p className="eyebrow">Blueprints • passports • interfaces</p>
          <h1>
            <span className="headline-row">Suvodip</span>
            <span className="headline-row accent">Chandra</span>
            <span className="headline-row">Ankon</span>
          </h1>

          <div className="role-swap" aria-live="polite">
            <span>Visa Processing</span>
            <span>NID Correction</span>
            <span>UI/UX Design</span>
            <span>Frontend Dev</span>
          </div>

          <div className="cta-row">
            <a className="primary-button" href={profile.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp me
              <ArrowRight size={16} />
            </a>
            <a className="secondary-button" href="#work">
              View work
            </a>
          </div>

          <div className="hero-strip">
            <span>{time}</span>
            <span>{profile.location}</span>
            <span>{profile.status}</span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="dimension-line left">H 480</div>
          <div className="dimension-line right">W 360</div>
          <div className="photo-frame">
            <Image src={profile.coverImage} alt={profile.alt} fill priority sizes="(max-width: 768px) 80vw, 32vw" />
          </div>
          <div className="stamp">Approved</div>
        </div>
      </section>

      <div className="marquee-wrap" aria-label="Service names">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div key={rowIndex} className="marquee-inner">
              {["Visa Processing", "NID Correction", "UI/UX Design", "Frontend Dev", "Technical Support", "Sylhet", "Dhaka", "Dubai", "Malaysia", "Saudi Arabia"].map((text) => (
                <span key={`${rowIndex}-${text}`} className="marquee-item">{text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="section-block about-grid">
        <div className="section-label">Section 03 — About</div>
        <div className="about-copy">
          <p>
            I&apos;m a <span className="highlight">visa-processing professional</span> with a civil-engineering mindset and a growing design/dev practice.
          </p>
          <p>
            That mix gives me a clear way to work: I read details closely, keep things moving, and shape digital experiences that feel trustworthy from the first click.
          </p>
        </div>

        <div className="spec-sheet">
          <div className="spec-header">
            <span>Owner</span>
            <span>Revision 01</span>
          </div>
          <div className="spec-row"><strong>Name</strong><span>{profile.name}</span></div>
          <div className="spec-row"><strong>Discipline</strong><span>Visa work • UI/UX • Frontend</span></div>
          <div className="spec-row"><strong>Education</strong><span>{profile.education}</span></div>
          <div className="spec-row"><strong>Base</strong><span>{profile.location}</span></div>
          <div className="spec-row"><strong>Languages</strong><span>Bangla • English</span></div>
          <div className="spec-row"><strong>Status</strong><span>{profile.status}</span></div>
        </div>
      </section>

      <section id="services" className="section-block">
        <div className="section-label">Section 04 — Services</div>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-row">
              <span className="service-index">0{services.indexOf(service) + 1}</span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
              <a href={`https://wa.me/8801753378658?text=${encodeURIComponent(service.whatsappText)}`} target="_blank" rel="noreferrer" className="service-link">
                Ask about this
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section-block process-block">
        <div className="section-label">Section 05 — Process</div>
        <div className="process-map">
          {processSteps.map((step, index) => (
            <div key={step} className="process-step">
              <span className="route-dot" aria-hidden="true" />
              <div className="step-card">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <span>{step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section-block skills-block">
        <div className="section-label">Section 06 — Skills & tools</div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag.name} className="skill-tag">{tag.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section-block work-block">
        <div className="section-label">Section 07 — Work</div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card ${project.todo ? "todo" : ""}`}>
              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.role}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <div className="project-image">
                <Image src={project.cover} alt={project.title} fill sizes="(max-width: 768px) 100vw, 32vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-block experience-block">
        <div className="section-label">Section 08 — Experience & education</div>
        <div className="timeline-grid">
          <div className="timeline-column">
            <h3>Work</h3>
            {workTimeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-column">
            <h3>Education</h3>
            {educationTimeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block contact-block">
        <div className="section-label">Section 09 — Contact</div>
        <div className="contact-grid">
          <div>
            <h2>Let&apos;s get your thing moving.</h2>
          </div>
          <div className="contact-links">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="contact-item">
              <MessageCircle size={22} />
              <span>WhatsApp</span>
            </a>
            <button type="button" className="contact-item email-item" onClick={copyEmail}>
              {copied ? <Check size={18} /> : <Mail size={18} />}
              <span>{copied ? "Copied" : profile.email}</span>
            </button>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact-item">
              <Phone size={18} />
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Set in Fraunces & Instrument Sans. Built by hand.</p>
        <div className="footer-meta">
          <span>© {year}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </main>
  );
}
