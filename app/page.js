"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Leaf, Sun, Wrench, Hammer, Building2, CheckCircle2 } from "lucide-react";

// ---- Simple i18n helper ----------------------------------------------------
const copy = {
  en: {
    nav: { services: "Services", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      kicker: "Solar • HVAC • Construction",
      title: "Powering homes and small businesses across Chicago",
      subtitle:
        "New Day Construction LLC is a community‑rooted, licensed contractor delivering solar installs, HVAC service, and light construction—done right, safely, and on time.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "See our work",
    },
    badges: {
      licensed: "Licensed & Insured",
      icc: "ICC DG • HVAC • GC",
      vendor: "Illinois Solar for All Approved Vendor",
    },
    services: {
      title: "What We Do",
      items: [
        {
          icon: <Sun className="w-6 h-6" />, 
          title: "Solar Installations",
          desc: "Residential PV design & install, battery backup (Powerwall), interconnection and incentives guidance.",
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "HVAC",
          desc: "Tune‑ups, diagnostics, repair & replacement. Manual J/S sizing, airflow balancing, and maintenance plans.",
        },
        {
          icon: <Hammer className="w-6 h-6" />,
          title: "General Construction",
          desc: "Small projects: carpentry, doors, decks, punch‑list, insurance repairs with clear scopes and timelines.",
        },
      ],
    },
    projects: {
      title: "Recent Projects",
      note: "Real projects from the West & South Sides — more photos coming soon.",
    },
    about: {
      title: "Built for our community",
      body:
        "We are a Chicago‑based contractor partnering with neighbors, builders, and nonprofits to deliver energy savings and skilled jobs. As a Powur Enterprise Partner and Tesla Powerwall installer, we bring quality gear and warranties with a local, respectful approach.",
      bullets: [
        "Bilingual team (English/Español)",
        "Transparent pricing & written scopes",
        "Permits, inspections, and utility coordination handled",
      ],
    },
    contact: {
      title: "Let’s talk",
      subtitle: "Tell us about your project and timeline. We’ll reply the same day.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Project details",
      submit: "Send",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: { services: "Servicios", projects: "Proyectos", about: "Acerca de", contact: "Contacto" },
    hero: {
      kicker: "Solar • HVAC • Construcción",
      title: "Energía y confort para hogares y negocios en Chicago",
      subtitle:
        "New Day Construction LLC es un contratista con raíces comunitarias que instala solar, sirve HVAC y ejecuta proyectos de construcción—con seguridad, calidad y a tiempo.",
      ctaPrimary: "Pedir cotización",
      ctaSecondary: "Ver trabajos",
    },
    badges: {
      licensed: "Licenciados y Asegurados",
      icc: "ICC DG • HVAC • GC",
      vendor: "Proveedor Aprobado de Illinois Solar for All",
    },
    services: {
      title: "Servicios",
      items: [
        {
          icon: <Sun className="w-6 h-6" />, 
          title: "Instalaciones Solares",
          desc: "Diseño e instalación residencial, baterías (Powerwall), interconexión y apoyo con incentivos.",
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "HVAC",
          desc: "Mantenimientos, diagnósticos, reparación y reemplazo. Cálculo Manual J/S, balanceo de aire y planes.",
        },
        {
          icon: <Hammer className="w-6 h-6" />,
          title: "Construcción General",
          desc: "Proyectos: "reparaciones de seguro con alcances claros.",
        },
      ],
    },
    projects: {
      title: "Proyectos Recientes",
      note: "Obras reales en Chicago — pronto subiremos más fotos.",
    },
    {/* ===== WORK GALLERY (same page) ===== */}
<section id="work" className="bg-neutral-50">
  <div className="max-w-6xl mx-auto px-4 py-14">
    <h2 className="text-2xl md:text-3xl font-bold">See our work</h2>
    <p className="mt-2 text-neutral-600">HVAC, solar, and construction projects across Chicagoland.</p>

    {[
      { title: "HVAC", base: "/projects/hvac", files: [
        "hvac1.jpg", "hvac2.jpg" // <- usa los nombres reales de tus fotos
      ]},
      { title: "Solar", base: "/projects/solar", files: [
        "solar1.jpg", "solar2.jpg"
      ]},
      { title: "Construction", base: "/projects/construction", files: [
        "construction1.jpg", "construction2.jpg"
      ]},
    ].map((cat, idx) => (
      <div key={idx} className={idx === 0 ? "mt-8" : "mt-12"}>
        <h3 className="mb-3 font-semibold">{cat.title}</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cat.files.map((name, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <img
                src={`${cat.base}/${name}`}
                alt={`${cat.title} ${i + 1}`}
                className="w-full h-56 object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

    about: {
      title: "Hecho para nuestra comunidad",
      body:
        "Somos un contratista de Chicago que colabora con vecinos, constructores y organizaciones para generar ahorros de energía y empleos calificados. Como socio de Powur y instalador de Tesla Powerwall, ofrecemos equipos y garantías de calidad con trato local y respetuoso.",
      bullets: [
        "Equipo bilingüe (English/Español)",
        "Precios transparentes y alcances por escrito",
        "Permisos, inspecciones y coordinación con la utility",
      ],
    },
    contact: {
      title: "Hablemos",
      subtitle: "Cuéntanos tu proyecto y tiempos. Respondemos el mismo día.",
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      message: "Detalles del proyecto",
      submit: "Enviar",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

function cx() {
  return Array.from(arguments).filter(Boolean).join(" ");
}

export default function Page() {
  const [lang, setLang] = React.useState("en");
  const t = copy[lang];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="w-7 h-7" />
            <div>
              <div className="font-semibold leading-tight">New Day Construction LLC</div>
              <div className="text-xs text-neutral-500">Solar • HVAC • Construction</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">{t.nav.services}</a>
            <a href="#work" className="hover:underline">{t.nav.projects}</a>
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              className={cx(
                "px-3 py-1.5 rounded-full text-xs border",
                lang === "en" ? "bg-black text-white border-black" : "bg-white border-neutral-300"
              )}
              onClick={() => setLang("en")}
            >EN</button>
            <button
              className={cx(
                "px-3 py-1.5 rounded-full text-xs border",
                lang === "es" ? "bg-black text-white border-black" : "bg-white border-neutral-300"
              )}
              onClick={() => setLang("es")}
            >ES</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-sm uppercase tracking-wide text-green-700 font-semibold">{t.hero.kicker}</div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">{t.hero.title}</h1>
              <p className="mt-4 text-neutral-600 md:text-lg">{t.hero.subtitle}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-black text-white font-medium shadow-sm">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a #work="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-neutral-300 bg-white font-medium">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </motion.div>

            {/* Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Badge title={t.badges.licensed} subtitle={t.badges.icc} />
              <Badge title={t.badges.vendor} subtitle="Approved May 2025" />
              <Badge title="Powur Enterprise Partner" subtitle="Tesla Powerwall installs" />
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-100 shadow-inner" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 border border-neutral-200 flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              <div className="text-sm">
                <div className="font-semibold">Chicago Service Area</div>
                <div className="text-neutral-500">City & near suburbs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">{t.services.title}</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => (
              <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center">{s.icon}</div>
                <div className="mt-4 font-semibold text-lg">{s.title}</div>
                <p className="mt-2 text-neutral-600 text-sm">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Permits, inspections, utility interconnect</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Warranties & documentation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Clean job sites & respect for tenants</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">{t.projects.title}</h2>
          <p className="mt-2 text-neutral-600">{t.projects.note}</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-3xl overflow-hidden border border-neutral-200 bg-white">
                <div className="aspect-video bg-neutral-200" />
                <div className="p-4">
                  <div className="font-semibold">Project #{i}</div>
                  <div className="text-sm text-neutral-600">Short description — scope, location, outcome.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t.about.title}</h2>
            <p className="mt-4 text-neutral-700">{t.about.body}</p>
            <ul className="mt-5 space-y-2 text-neutral-700">
              {t.about.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="font-semibold">Credentials</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
              <Cred label="ICC Distributed Generator (DG)" />
              <Cred label="HVAC License" />
              <Cred label="General Contractor (GC)" />
              <Cred label="ILSFA Approved Vendor (May 2025)" />
              <Cred label="Powur Enterprise Partner" />
              <Cred label="Tesla Powerwall Installer" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">{t.contact.title}</h2>
          <p className="mt-2 text-neutral-600">{t.contact.subtitle}</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <label className="text-sm">
                  {t.contact.name}
                  <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Jane Doe" />
                </label>
                <label className="text-sm">
                  {t.contact.email}
                  <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="jane@email.com" />
                </label>
                <label className="text-sm">
                  {t.contact.phone}
                  <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="773‑000‑0000" />
                </label>
                <label className="text-sm md:col-span-2">
                  {t.contact.message}
                  <textarea className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 min-h-[120px]" placeholder="Roof size, equipment age, or job scope…" />
                </label>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-5 py-3 font-medium">
                  {t.contact.submit} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 mt-1" /> <div>
                <div className="font-semibold">Call/Text</div>
                <div className="text-neutral-600">773‑699‑7266</div>
              </div></div>
              <div className="flex items-start gap-3"><Mail className="w-5 h-5 mt-1" /> <div>
                <div className="font-semibold">Email</div>
                <div className="text-neutral-600">NewDayConstruction606@gmail.com</div>
              </div></div>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-1" /> <div>
                <div className="font-semibold">Office</div>
                <div className="text-neutral-600">1407 S Tripp Ave, Chicago, IL</div>
              </div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} New Day Construction LLC. {t.footer.rights}</div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
            <a href="#projects" className="hover:underline">{t.nav.projects}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Badge({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      {subtitle && <div className="text-xs text-neutral-500 mt-0.5">{subtitle}</div>}
    </div>
  );
}

function Cred({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-neutral-100 px-3 py-2">
      <CheckCircle2 className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
}
