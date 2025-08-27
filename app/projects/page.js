// app/projects/page.js
"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = {
  Construction: [
    "/projects/construction/before_RE.jpg",
    "/projects/construction/after_RE.jpg",
  ],
  HVAC: [
    // add/remove to match EXACT file names in /public/projects/hvac
    "/projects/hvac/ACcondenser.jpg",
    "/projects/hvac/carrier_codeV.jpg",
    "/projects/hvac/carrier_DoneR.jpg",
    "/projects/hvac/ductwork.jpg",
    "/projects/hvac/ductwork_returnsupply.jpg",
    "/projects/hvac/GIBSON.jpg",
    "/projects/hvac/rheem.jpg",
    "/projects/hvac/rheem_OG.jpg",
    "/projects/hvac/RHEEM_rheem.jpg",
    "/projects/hvac/Schematics.jpg",
  ],
  Solar: [
    "/projects/solar/front_solar.jpg",
    "/projects/solar/roof_view.jpg",
    "/projects/solar/solar.jpg",
  ],
};

export default function ProjectsPage() {
  const tabs = Object.keys(IMAGES);
  const [active, setActive] = useState(tabs[0]);
  const [lightbox, setLightbox] = useState(null);

  const images = IMAGES[active].filter(Boolean);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Our Work</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full border ${
              active === t
                ? "bg-black text-white border-black"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      {images.length === 0 ? (
        <p>No photos found in <code>/public/projects/{active.toLowerCase()}</code>.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src) => (
            <button
              key={src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border"
              onClick={() => setLightbox(src)}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={true}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image
              src={lightbox}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
