
"use client";
import React, { useMemo, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, MapPin, Mail, Phone, Hammer, Sun, Wind, Facebook, Linkedin, Shield, FileCheck2, Building2, Globe, Languages } from "lucide-react";
import "./globals.css";

// --- Fake submit; switch to realSubmit (Formspree) when ready ---
async function fakeSubmit(form) { await new Promise((r) => setTimeout(r, 600)); return { ok: true }; }
async function realSubmit(form){
  const url = process.env.NEXT_PUBLIC_FORM_ENDPOINT || process.env.FORM_ENDPOINT;
  if(!url) return { ok:false, error: "Missing FORM_ENDPOINT" };
  const res = await fetch(url, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });
  return { ok: res.ok };
}

const STRINGS = {
  en: {
    brandTag: "Licensed • Insured • Community-Built",
    nav: { services: "Services", credentials: "Credentials", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Chicago • HVAC • Solar • General Contracting",
      headline: "Build it right. Power it clean.",
      sub: "New Day Construction LLC helps families and developers across Chicagoland with HVAC, solar energy, and quality construction—delivered with honesty, craft, and community heart.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "See our work"
    },
    services: {
      title: "What we do",
      items: [
        { icon: <Wind className="h-6 w-6" />, title: "HVAC — Residential & Light Commercial",
          bullets: ["Installations, repairs & maintenance", "Manual J/S sizing & energy efficiency", "Ductwork, IAQ, smart thermostats"] },
        { icon: <Sun className="h-6 w-6" />, title: "Solar — Design, Sales & Installation",
          bullets: ["Illinois Solar for All (ILSFA) Approved Vendor", "Roof- & ground-mount, batteries, interconnection", "Site assessments, incentives & permitting"] },
        { icon: <Hammer className="h-6 w-6" />, title: "Construction — Repairs & Build-outs",
          bullets: [ "Insurance & punch-list repairs", "GC support for small developments"] }
      ]
    },
    creds: {
      title: "Credentials & Partners",
      items: [
        "Distributed Generation License (IL)",
        "EPA, BPI, NABCEP training & industry certs",
        "ILSFA Approved Vendor (May 2025)",
        "Powur Enterprise Partner",
        "ComEd program experience"
      ],
      docLine: "Licensed • Bonded • Insured"
    },
    about: {
      title: "Built by neighbors, for neighbors",
      body: "We are a Chicago-based, Latino-led company serving homes and small developments throughout the city and suburbs. Our promise is simple: clear communication, fair pricing, and work we’re proud to sign."
    },
    contact: {
      title: "Let’s get you a quote",
      sub: "Tell us about your project and we’ll follow up same-day.",
      name: "Your name", email: "Email", phone: "Phone", message: "What do you need done?", submit: "Send",
      at: "Find us", phoneLabel: "Call", emailLabel: "Email"
    },
    footer: { rights: "All rights reserved.", built: "Made with ♥ in Chicago" }
  },
  es: {
    brandTag: "Licenciados • Asegurados • Construido con la comunidad",
    nav: { services: "Servicios", credentials: "Credenciales", about: "Nosotros", contact: "Contacto" },
    hero: {
      eyebrow: "Chicago • HVAC • Solar • Construcción",
      headline: "Construimos bien. Energía limpia.",
      sub: "New Day Construction LLC apoya a familias y desarrolladores en Chicago con HVAC, energía solar y construcción de calidad—con honestidad, oficio y corazón comunitario.",
      ctaPrimary: "Pide tu cotización",
      ctaSecondary: "Ver trabajos"
    },
    services: {
      title: "Lo que hacemos",
      items: [
        { icon: <Wind className="h-6 w-6" />, title: "HVAC — Residencial y Comercial ligero",
          bullets: ["Instalaciones, reparaciones y mantenimiento", "Cálculos Manual J/S y eficiencia energética", "Ductos, IAQ y termostatos inteligentes"] },
        { icon: <Sun className="h-6 w-6" />, title: "Solar — Diseño, Ventas e Instalación",
          bullets: ["Proveedor Aprobado ILSFA (mayo 2025)", "Sistemas en techo/suelo, baterías, interconexión", "Evaluaciones, incentivos y permisos"] },
        { icon: <Hammer className="h-6 w-6" />, title: "Construcción — Reparaciones y build-outs",
          bullets: ["Estructura, drywall, acabados y carpintería", "Reparaciones de seguro y punch-list", "Apoyo GC para desarrollos pequeños"] }
      ]
    },
    creds: {
      title: "Credenciales y Aliados",
      items: [
        "Licencia de Generación Distribuida (IL)",
        "EPA, BPI, capacitación NABCEP",
        "Proveedor Aprobado ILSFA (mayo 2025)",
        "Socio Enterprise de Powur",
        "Experiencia con programas de ComEd"
      ],
      docLine: "Licenciados • Asegurados"
    },
    about: { title: "Hecho por vecinos, para vecinos",
      body: "Somos una empresa con raíces latinas en Chicago que sirve a hogares y pequeños desarrollos en la ciudad y suburbios. Prometemos comunicación clara, precios justos y un trabajo del cual estamos orgullosos." },
    contact: {
      title: "Cuéntanos de tu proyecto", sub: "Compártenos detalles y te contactamos hoy mismo.",
      name: "Tu nombre", email: "Correo", phone: "Teléfono", message: "¿Qué necesitas?", submit: "Enviar",
      at: "Dónde estamos", address: "1407 S Tripp Ave, Chicago, IL 60623", phoneLabel: "Llamar", emailLabel: "Correo"
    },
    footer: { rights: "Todos los derechos reservados.", built: "Hecho con ♥ en Chicago" }
  }
};

export default function NewDayConstructionSite(){
  const [lang, setLang] = useState("en");
  const t = useMemo(()=>STRINGS[lang], [lang]);
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
        <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6" />
              <div className="leading-tight">
                <div className="font-bold text-lg">New Day Construction LLC</div>
                <div className="text-xs text-zinc-500">{t.brandTag}</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="hover:text-zinc-700">{t.nav.services}</a>
              <a href="#credentials" className="hover:text-zinc-700">{t.nav.credentials}</a>
              <a href="#about" className="hover:text-zinc-700">{t.nav.about}</a>
              <a href="#contact" className="hover:text-zinc-700">{t.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={()=>setLang(lang==="en"?"es":"en")}>
                <Languages className="h-4 w-4 mr-2" /> {lang==="en"?"ES":"EN"}
              </Button>
              <a href="#contact"><Button size="sm">{t.hero.ctaPrimary}</Button></a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">{t.hero.eyebrow}</Badge>
              <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}
                className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.hero.headline}</motion.h1>
              <p className="mt-4 text-lg text-zinc-600">{t.hero.sub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact"><Button className="rounded-2xl px-6">{t.hero.ctaPrimary}</Button></a>
                <a href="#credentials"><Button variant="outline" className="rounded-2xl px-6">{t.hero.ctaSecondary}</Button></a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
                <Shield className="h-4 w-4" /> <span>Licensed, bonded & insured</span>
                <FileCheck2 className="h-4 w-4 ml-4" /> <span>Permit & inspection ready</span>
                <Building2 className="h-4 w-4 ml-4" /> <span>Serving Chicago & suburbs</span>
              </div>
            </div>
            <motion.div initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}}
              className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <div className="aspect-[4/3] w-full grid grid-cols-2">
                <div className="bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center col-span-2" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.items.map((s,i)=>(
              <Card key={i} className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-zinc-100">{s.icon}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    {s.bullets.map((b,j)=>(<li key={j} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {b}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="credentials" className="bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{t.creds.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                    {t.creds.items.map((c,i)=>(<li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {c}</li>))}
                  </ul>
                  <p className="mt-4 text-xs text-zinc-500">{t.creds.docLine}</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Programs & Experience</CardTitle></CardHeader>
                <CardContent className="text-sm text-zinc-600 space-y-2">
                  <p>Illinois Shines & ILSFA navigation, interconnections (ComEd), AHJ inspections, permitting and incentives paperwork. Residential + small multi-family focus. Fleet ready for Chicago winters.</p>
                  <div className="flex items-center gap-3 text-zinc-500 text-xs">
                    <span className="inline-flex items-center gap-2"><Shield className="h-3.5 w-3.5"/> Safety-first job sites</span>
                    <span className="inline-flex items-center gap-2"><FileCheck2 className="h-3.5 w-3.5"/> Transparent scopes & COs</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{t.about.title}</h2>
              <p className="text-zinc-600 leading-relaxed">{t.about.body}</p>
            </div>
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Quick facts</CardTitle></CardHeader>
              <CardContent className="text-sm text-zinc-600">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Latino-led, Chicago-raised team</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Community-first hiring & training</li>
                  <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> Transparent pricing & warranties</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{t.contact.title}</h2>
              <p className="text-zinc-600 mb-6">{t.contact.sub}</p>
              <ContactForm lang={lang} t={t} />
            </div>
            <div>
              <Card className="rounded-2xl h-full">
                <CardHeader><CardTitle>{t.contact.at}</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-sm text-zinc-700">
                  <div className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-0.5" /> {t.contact.address}</div>
                  <a className="flex items-start gap-3 hover:underline" href="tel:+17736997266"><Phone className="h-5 w-5 mt-0.5" /> {t.contact.phoneLabel}: 773-699-7266</a>
                  <a className="flex items-start gap-3 hover:underline" href="mailto:NewDayConstruction606@gmail.com"><Mail className="h-5 w-5 mt-0.5" /> {t.contact.emailLabel}: NewDayConstruction606@gmail.com</a>
                  <div className="pt-2 flex gap-3">
                    <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-zinc-100"><Facebook className="h-4 w-4" /></a>
                    <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-zinc-100"><Linkedin className="h-4 w-4" /></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div>© {new Date().getFullYear()} New Day Construction LLC. {t.footer.rights}</div>
            <div>{t.footer.built}</div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

function ContactForm({ lang, t }){
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const label = (key)=> t.contact[key];
  const onSubmit = async (e)=>{
    e.preventDefault();
    setSubmitting(true);
    // TODO: swap to realSubmit when FORM_ENDPOINT is set
    const res = await fakeSubmit(form);
    setSubmitting(false);
    if(res.ok) setSent(true);
  };
  if (sent) {
    return (
      <Card className="rounded-2xl">
        <CardContent className="py-10 text-center space-y-2">
          <h3 className="text-xl font-semibold">{lang==="en"?"Thanks!":"¡Gracias!"}</h3>
          <p className="text-zinc-600">{lang==="en"?"We received your message and will reach out today.":"Recibimos tu mensaje y te contactamos hoy mismo."}</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input required placeholder={label("name")} value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
        <Input required type="email" placeholder={label("email")} value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
      </div>
      <Input placeholder={label("phone")} value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
      <Textarea required rows={5} placeholder={label("message")} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
      <div className="flex items-center gap-3">
        <Button type="submit" className="rounded-2xl px-6" disabled={submitting}>
          {submitting ? (lang==="en"?"Sending…":"Enviando…") : t.contact.submit}
        </Button>
        <p className="text-xs text-zinc-500">We respect your time and privacy.</p>
      </div>
    </form>
  );
}
