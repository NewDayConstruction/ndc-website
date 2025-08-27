
"use client";
import React, { useState } from "react";
import Image from "next/image";

const CATS = ["Construction","HVAC","Solar"];

const IMAGES = {
  Construction: [
    "/projects/construction/before_RE.jpg",
    "/projects/construction/after_RE.jpg",
  ],
  HVAC: [
    "/projects/hvac/hvac-condenser.jpg",
    "/projects/hvac/furnace-before.jpg",
    "/projects/hvac/furnace-after.jpg",
    "/projects/hvac/ducts-attic.jpg",
    "/projects/hvac/ducts-vertical-run.jpg",
    "/projects/hvac/gibson-furnace-open.jpg",
    "/projects/hvac/rheem-high-eff.jpg",
    "/projects/hvac/rheem-legacy.jpg",
    "/projects/hvac/rheem-furnace-front.jpg",
    "/projects/hvac/schematics.jpg",
  ],
  Solar: [
    "/projects/solar/front_solar.jpg",
    "/projects/solar/roof_view.jpg",
    "/projects/solar/solar.jpg",
  ],
};

export default function Projects(){
  const [cat, setCat] = useState("Construction");
  const [lightbox, setLightbox] = useState({ open:false, idx:0 });

  const list = IMAGES[cat];
  const open = (i)=> setLightbox({open:true, idx:i});
  const close = ()=> setLightbox({open:false, idx:0});
  const prev = ()=> setLightbox(s=>({open:true, idx:(s.idx-1+list.length)%list.length}));
  const next = ()=> setLightbox(s=>({open:true, idx:(s.idx+1)%list.length}));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Projects</h1>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {CATS.map(c => (
          <button key={c} onClick={()=>setCat(c)}
            className={`rounded-full px-4 py-2 text-sm border ${c===cat ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-300 hover:bg-zinc-50"}`}>
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((src,i)=>(
          <button key={i} onClick={()=>open(i)} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <Image src={src} alt="" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" priority={i<3}/>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button onClick={close} className="absolute inset-0" aria-label="Close overlay"></button>
          <div className="relative w-[90vw] h-[80vh]" role="dialog" aria-modal="true">
            <Image src={list[lightbox.idx]} alt="" fill className="object-contain" />
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-2">‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-3 py-2">›</button>
            <button onClick={close} className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-2">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
