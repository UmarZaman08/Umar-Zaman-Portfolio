import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Briefcase,
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Wrench,
  Apple,
  Play,
  CreditCard,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";


export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "React Native Developer",
    company: "HexaSynergy",
    period: "Nov 2025 — Present",
    bullets: [
      "Leading end-to-end architecture of a SaaS mobile application from ground up.",
      "Managing full SDLC: requirements, design, implementation, QA, and release.",
      "Implementing secure role-based access control (RBAC) and multi-tenant patterns.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Bridge Zones Inc.",
    period: "Sep 2023 — Oct 2025",
    bullets: [
      "Led a team of mobile developers across multiple production ride-sharing apps.",
      "Integrated Google Maps, Firebase, SignalR, and SOAP/RESTful APIs at scale.",
      "Shipped payment systems with Stripe and Moneris; native background GPS tracking.",
    ],
  },
  {
    role: "React Native Developer — Internship",
    company: "Devspot",
    period: "Nov 2022 — Feb 2023",
    bullets: [
      "Built foundations in React Native, mobile debugging, and cross-platform delivery.",
      "Solved real-world technical problems shipped into client applications.",
    ],
  },
];

const SKILLS: { title: string; icon: typeof Code2; items: string[] }[] = [
  {
    title: "Mobile",
    icon: Code2,
    items: ["React Native", "React", "TypeScript", "JavaScript (ES6+)", "Native Modules"],
  },
  {
    title: "State & Real-Time",
    icon: Cpu,
    items: ["Redux Toolkit", "React Context API", "SignalR", "Sockets", "Firebase Realtime DB"],
  },
  {
    title: "Architecture & APIs",
    icon: Layers,
    items: ["SaaS Architecture", "Multi-Module Design", "RBAC", "RESTful / SOAP APIs", "Firebase"],
  },
  {
    title: "Infrastructure & Tools",
    icon: Wrench,
    items: [
      "App Store / Play Store Deployment",
      "CI/CD",
      "Stripe",
      "Moneris",
      "Google Maps API",
      "Background Location Tracking",
    ],
  },
];

const PROJECTS: {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  payment?: string;
  appStore?: string;
  playStore?: string;
}[] = [
  {
    title: "Ex Cabs Passenger App",
    tag: "Taxi Booking · Grande Prairie, AB",
    desc: "Premier cab service booking platform built for Grande Prairie, Alberta, providing fast booking and modern live-tracking fleet management.",
    stack: ["React Native", "SignalR", "Google Maps", "Stripe"],
    payment: "Stripe",
    appStore: "https://apps.apple.com/ca/app/ex-cabs/id6778565442",
    playStore: "https://play.google.com/store/apps/details?id=com.excab",
  },
  {
    title: "Ex Cabs Driver App",
    tag: "Driver Companion",
    desc: "Real-time driver companion application for Ex Cabs featuring optimized GPS routing, ride bids, and an embedded digital earnings wallet.",
    stack: ["React Native", "Background Location", "SignalR", "Google Maps"],
    appStore: "https://apps.apple.com/ca/app/excabdriver/id6768571467",
    playStore: "https://play.google.com/store/apps/details?id=com.excabdriver",
  },
  {
    title: "Exiride Passenger App",
    tag: "Multi-City Ride Sharing",
    desc: "Effortless multi-city ride-sharing platform supporting instant rides, out-of-town trips, and pre-scheduled bookings.",
    stack: ["React Native", "Firebase", "Google Maps", "Moneris"],
    payment: "Moneris",
    appStore: "https://apps.apple.com/ca/app/exiride/id6504408322",
    playStore: "https://play.google.com/store/apps/details?id=com.exiride",
  },
  {
    title: "Exiride Driver App",
    tag: "Driver Utility",
    desc: "Dynamic driver utility for real-time ride assignments, map-based fare bidding, and transparent in-app transaction processing.",
    stack: ["React Native", "Native Modules", "SignalR", "Firebase"],
    appStore: "https://apps.apple.com/us/app/exiride-d/id6504280117",
    playStore: "https://play.google.com/store/apps/details?id=com.bridge_zone",
  },
  {
    title: "Bridge City Cabs Passenger App",
    tag: "Taxi Booking · Lethbridge, AB",
    desc: "Highly reliable, 24/7 taxi booking application deployed for Lethbridge, Alberta, ensuring transparent upfront fares and comfortable user transit.",
    stack: ["React Native", "SignalR", "Google Maps", "Moneris"],
    payment: "Moneris",
    appStore: "https://apps.apple.com/ca/app/bridge-city-cabs/id6740337991",
    playStore: "https://play.google.com/store/apps/details?id=com.bridgecitycabs",
  },
];


function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: "#0A0A0C" }}>
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0A0A0C]/70 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF] font-bold">
              UZ
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Umar Zaman
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#00E5FF]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/5 px-4 py-2 text-sm font-medium text-[#00E5FF] transition-all hover:bg-[#00E5FF]/15 hover:shadow-[0_0_24px_-4px_rgba(0,229,255,0.5)]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-foreground md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#0A0A0C]/95 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-[#00E5FF]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/60 px-4 py-2 text-sm font-medium text-[#00E5FF]"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden grid-bg pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0C]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="animate-fade-in max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF]" />
              </span>
              Available for senior mobile roles
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad{" "}
              <span className="text-glow" style={{ color: "#00E5FF" }}>
                Umar Zaman
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Senior React Native Developer{" "}
              <span className="mx-2 text-[#00E5FF]/60">|</span> 3+ Years of
              Cross-Platform Mobile Architecture
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Results-driven engineer specializing in building, scaling, and
              shipping production-grade iOS &amp; Android applications.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00E5FF] px-6 py-3 text-sm font-semibold text-[#0A0A0C] transition-all hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.8)] hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-[#00E5FF]/60 hover:text-[#00E5FF]"
              >
                Let's Connect
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { k: "3+", v: "Years Experience" },
                { k: "10+", v: "Apps Shipped" },
                { k: "2", v: "Payment Gateways" },
                { k: "iOS·Android", v: "Cross-Platform" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-bold text-[#00E5FF] sm:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Career" title="Professional Experience" icon={Briefcase}>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#00E5FF]/60 via-white/10 to-transparent md:left-1/2" />
          <ul className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <li key={e.company} className="relative md:grid md:grid-cols-2 md:gap-12">
                <div
                  className={`md:col-span-1 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="pl-12 md:pl-0">
                    <span className="inline-block rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-3 py-1 text-xs font-medium text-[#00E5FF]">
                      {e.period}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold">
                      {e.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">@ {e.company}</p>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-left">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00E5FF]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="absolute left-4 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-[#00E5FF]/40" />
                  <span className="relative h-3 w-3 rounded-full bg-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Toolbox" title="Core Technical Skills" icon={Sparkles}>
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="glass-card glass-card-hover p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[#00E5FF]/50 hover:text-[#00E5FF]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work" title="Key Projects" icon={Layers}>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass-card glass-card-hover group flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#00E5FF]">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {p.title}
                    </h3>
                  </div>
                  {p.payment && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-2.5 py-1 text-[11px] font-medium text-[#00E5FF]">
                      <CreditCard className="h-3 w-3" />
                      {p.payment}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {p.appStore && (
                    <a
                      href={p.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-[#00E5FF]/50 hover:text-[#00E5FF]"
                    >
                      <Apple className="h-3.5 w-3.5" />
                      App Store
                    </a>
                  )}
                  {p.playStore && (
                    <a
                      href={p.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-[#00E5FF]/50 hover:text-[#00E5FF]"
                    >
                      <Play className="h-3.5 w-3.5" />
                      Google Play
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}

        </div>
      </Section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something{" "}
            <span className="text-glow" style={{ color: "#00E5FF" }}>
              Great
            </span>{" "}
            Together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to senior React Native roles, contract work, and technical
            partnerships. Reach out — I usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:umar.zaman6490@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#00E5FF] px-6 py-3 text-sm font-semibold text-[#0A0A0C] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.8)]"
            >
              <Mail className="h-4 w-4" />
              umar.zaman6490@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-[#00E5FF]" />
              Islamabad, Pakistan
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {[
              { icon: Github, href: "https://github.com/UmarZaman08", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-umar-zaman/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:umar.zaman6490@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-[#00E5FF]/60 hover:text-[#00E5FF]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <footer className="relative mx-auto mt-20 max-w-7xl border-t border-white/5 px-5 pt-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Muhammad Umar Zaman. All rights reserved.</p>
            <p>Crafted with React, Tailwind & attention to detail.</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof Briefcase;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-3 py-1 text-xs font-medium text-[#00E5FF]">
            <Icon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
