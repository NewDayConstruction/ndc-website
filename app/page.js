import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Snowflake,
  Hammer,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

/**
 * NEW DAY CONSTRUCTION LLC – Single-file website
 * Framework: React (works in Next.js App Router as a page component)
 * Styling: TailwindCSS + shadcn/ui + framer-motion + lucide-react icons
 *
 * How to use in Next.js:
 *   1) Ensure Tailwind + shadcn/ui are configured.
 *   2) Create a file at app/page.tsx (or any route) and paste this code.
 *   3) Replace placeholder images/links with your own. Deploy on Vercel.
 *
 * Tips:
 * - All section IDs match nav anchors for smooth scrolling.
 * - Update CONTACT_INFO and PARTNERS with your real details.
 */

const CONTACT_INFO = {
  phone: "+1-773-699-7266",
  email: "NewDayConstruction606@gmail.com",
  address: "Chicago, IL",
};

const PARTNERS = [
  { name: "Powur PBC", href: "https://powur.com" },
  { name: "Tesla Energy", href: "https://www.tesla.com/energy" },
  { name: "EnFin", href: "https://www.enfin.com" },
  { name: "HACIA", href: "https://www.haciaworks.org" },
  { name: "PNCC", href: "https://pilsenneighbors.org" },
];

const PROJECTS = [
  {
    title: "South Side Solar – 6.4 kW",
    tag: "Solar",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Boiler Swap + Tune",
    tag: "HVAC",
    img: "https://images.unsplash.com/photo-1581092921461-cd7e040f64f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kitchen Refresh",
    tag: "Construction",
    img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Rooftop HVAC – RTU",
    tag: "HVAC",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "West Loop Solar – 9.8 kW",
    tag: "Solar",
    img: "https://images.unsplash.com/photo-1505731132164-cca903381e86?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Deck + Overhang",
    tag: "Construction",
    img: "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1200&auto=format&fit=crop",
  },
];

const T = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Chicago • Licensed • Community‑driven",
      title: "Solar, HVAC & Construction — done right.",
      subtitle:
        "New Day Construction LLC delivers reliable installs, smart retrofits, and responsive service across Chicagoland.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "See projects",
    },
    services: {
      title: "What we do",
      solar: {
        title: "Solar Installation",
        bullets: [
          "Residential & light commercial",
          "Design, permitting, interconnection",
          "Battery/backup ready",
        ],
      },
      hvac: {
        title: "HVAC Service",
        bullets: [
          "AC tune‑ups & diagnostics",
          "Furnace/boiler repair",
          "Load calcs & right‑sizing",
        ],
      },
      construction: {
        title: "General Construction",
        bullets: [
          "Carpentry & small remodels",
          "Decks, doors, finishes",
          "Insurance repair scope",
        ],
      },
    },
    projects: { title: "Recent work", filterAll: "All" },
    partners: { title: "Partners & Networks" },
    contact: {
      title: "Let’s build your project",
      subtitle:
        "Tell us a bit about your home or business. We’ll respond with options and next steps.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Project details",
      send: "Send message",
      direct: "Or reach us directly",
    },
    footer: {
      about:
        "Licensed: ICC Distributed Generation (DG), HVAC Licensed, General Contractor (GC). Serving Chicago & suburbs.",
      rights: "© " + new Date().getFullYear() + " New Day Construction LLC. All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      partners: "Aliados",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Chicago • Con licencias • Enfocados en la comunidad",
      title: "Solar, HVAC y Construcción — bien hechos.",
      subtitle:
        "New Day Construction LLC realiza instalaciones confiables, mejoras inteligentes y servicio rápido en Chicago y alrededores.",
      ctaPrimary: "Pedir cotización",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      title: "Qué hacemos",
      solar: {
        title: "Instalación Solar",
        bullets: [
          "Residencial y comercial ligero",
          "Diseño, permisos e interconexión",
          "Listo para baterías/respaldo",
        ],
      },
      hvac: {
        title: "Servicio HVAC",
        bullets: [
          "Mantenimientos y diagnósticos",
          "Reparación de hornos/calderas",
          "Cálculos de carga y tamaño correcto",
        ],
      },
      construction: {
        title: "Construcción General",
        bullets: [
          "Carpintería y remodelaciones pequeñas",
          "Decks, puertas y acabados",
          "Reparaciones por seguro",
        ],
      },
    },
    projects: { title: "Trabajos recientes", filterAll: "Todos" },
    partners: { title: "Aliados y Redes" },
    contact: {
      title: "Hagamos tu proyecto",
      subtitle:
        "Cuéntanos sobre tu casa o negocio. Te responderemos con opciones y próximos pasos.",
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      message: "Detalles del proyecto",
      send: "Enviar mensaje",
      direct: "O contáctanos directo",
    },
    footer: {
      about:
        "Licencias: ICC DG (Generación Distribuida), Licencia HVAC, Contratista General (GC). Atendemos Chicago y suburbios.",
      rights: "© " + new Date().getFullYear() + " New Day Construction LLC. Todos los derechos reservados.",
    },
  },
} as const;

type LangKey = keyof typeof T;

const Section = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <section id={id} className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</section>
);

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </a>
);

export default function NDCWebsite() {
  const [lang, setLang] = useState<LangKey>("en");
  const t = T[lang];
  const [filter, setFilter] = useState<string>("All");

  const tags = useMemo(() => [t.projects.filterAll, "Solar", "HVAC", "Construction"], [lang]);
  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => (filter === "All" || filter === "Todos") ? true : p.tag === filter),
    [filter]
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <Section>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold tracking-tight">New Day Construction LLC</span>
              <Badge variant="secondary" className="hidden sm:inline">Chicago, IL</Badge>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <NavLink href="#services">{t.nav.services}</NavLink>
              <NavLink href="#projects">{t.nav.projects}</NavLink>
              <NavLink href="#partners">{t.nav.partners}</NavLink>
              <NavLink href="#contact">{t.nav.contact}</NavLink>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant={lang === "en" ? "default" : "secondary"} onClick={() => setLang("en")}>EN</Button>
              <Button size="sm" variant={lang === "es" ? "default" : "secondary"} onClick={() => setLang("es")}>ES</Button>
            </div>
          </div>
        </Section>
      </div>

      {/* Hero */}
      <Section>
        <div className="relative overflow-hidden mt-8 rounded-2xl bg-gradient-to-br from-amber-200/30 via-sky-200/30 to-emerald-200/30 border">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 sm:p-12">
            <div>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-xs uppercase tracking-widest text-muted-foreground">
                {t.hero.eyebrow}
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
                {t.hero.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-lg text-muted-foreground">
                {t.hero.subtitle}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => scrollTo("contact")}>{t.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="secondary" onClick={() => scrollTo("projects")}>{t.hero.ctaSecondary}</Button>
              </motion.div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "Projects", v: "150+" },
                  { k: "Years", v: "10+" },
                  { k: "5‑Star", v: "Dozens" },
                ].map((s, i) => (
                  <Card key={i} className="border-dashed">
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground">{s.k}</p>
                      <p className="text-2xl font-semibold">{s.v}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex items-center">
              <Card className="w-full shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> IL Licensed & Insured</CardTitle>
                  <CardDescription>
                    ICC Distributed Generation (DG), HVAC, and General Contractor qualifications for clean energy and building work.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <Sun className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Solar</p>
                      <p className="text-sm text-muted-foreground">Rooftop PV, battery‑ready, interconnection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Snowflake className="h-5 w-5" />
                    <div>
                      <p className="font-medium">HVAC</p>
                      <p className="text-sm text-muted-foreground">Tune‑ups, diagnostics, replacements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hammer className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Construction</p>
                      <p className="text-sm text-muted-foreground">Carpentry, finishes, small remodels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight">{t.services.title}</h2>
          <p className="text-muted-foreground mt-2">Solar • HVAC • Construction</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ServiceCard
              icon={<Sun className="h-5 w-5" />}
              title={t.services.solar.title}
              bullets={t.services.solar.bullets}
            />
            <ServiceCard
              icon={<Snowflake className="h-5 w-5" />}
              title={t.services.hvac.title}
              bullets={t.services.hvac.bullets}
            />
            <ServiceCard
              icon={<Hammer className="h-5 w-5" />}
              title={t.services.construction.title}
              bullets={t.services.construction.bullets}
            />
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{t.projects.title}</h2>
              <p className="text-muted-foreground mt-2">Selected installs & upgrades</p>
            </div>
            <div className="flex gap-2">
              {tags.map((tg) => (
                <Button key={tg} size="sm" variant={(filter === tg) ? "default" : "secondary"} onClick={() => setFilter(tg)}>
                  {tg}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <Card className="overflow-hidden group">
                  <div className="aspect-[16/10] bg-muted relative">
                    <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      <Badge>{p.tag}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section id="partners">
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight">{t.partners.title}</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PARTNERS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="rounded-xl border p-4 text-center hover:bg-muted transition-colors">
                <span className="font-medium">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="mt-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-3xl">{t.contact.title}</CardTitle>
                <CardDescription>{t.contact.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const fd = new FormData(form);
                    const msg = encodeURIComponent(
                      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nMessage: ${fd.get("message")}`
                    );
                    window.location.href = `mailto:${CONTACT_INFO.email}?subject=New%20Project%20Inquiry&body=${msg}`;
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">{t.contact.name}</label>
                      <Input name="name" required placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">{t.contact.email}</label>
                      <Input type="email" name="email" required placeholder="jane@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">{t.contact.phone}</label>
                      <Input name="phone" placeholder="(773) 555‑0123" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Service</label>
                      <select name="service" className="w-full h-10 rounded-md border bg-background px-3 text-sm">
                        <option>Solar</option>
                        <option>HVAC</option>
                        <option>Construction</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">{t.contact.message}</label>
                    <Textarea name="message" rows={5} placeholder="Roof age, square footage, goals, timeline…" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Button type="submit" className="">{t.contact.send}</Button>
                    <span className="text-sm text-muted-foreground">{t.contact.direct}:</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
                      <Phone className="h-4 w-4" /> {CONTACT_INFO.phone}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-1 text-sm font-medium hover:underline">
                      <Mail className="h-4 w-4" /> {CONTACT_INFO.email}
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Visit / Service Area</CardTitle>
                <CardDescription>We’re based in Chicago and serve nearby suburbs.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{CONTACT_INFO.address}</p>
                    <p className="text-sm text-muted-foreground">Chicagoland • Cook County • Surrounding areas</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <FeaturePill icon={<Building2 className="h-4 w-4" />} text="Licensed & Insured" />
                  <FeaturePill icon={<Wrench className="h-4 w-4" />} text="Pro Install Crew" />
                  <FeaturePill icon={<Sun className="h-4 w-4" />} text="Clean Energy" />
                  <FeaturePill icon={<Snowflake className="h-4 w-4" />} text="Comfort First" />
                </div>
                <div className="rounded-xl overflow-hidden border">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                    alt="Chicago skyline"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t">
        <Section>
          <div className="py-10 grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">New Day Construction LLC</p>
              <p className="text-sm text-muted-foreground mt-1">{T[lang].footer.about}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <a href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" /> {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" /> {CONTACT_INFO.email}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 hover:underline">
                <ArrowRight className="h-4 w-4" /> {T[lang].nav.contact}
              </a>
            </div>
          </div>
          <div className="pb-10 text-xs text-muted-foreground">{T[lang].footer.rights}</div>
        </Section>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">{icon} {title}</CardTitle>
        <CardDescription>Quality work • Clear communication • Fair pricing</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}
