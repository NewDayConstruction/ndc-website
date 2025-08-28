// app/projects/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

// EXACT filenames and paths in your repo
const PHOTOS = {
  Construction: [
    "/projects/construction/before_RE.jpg",
    "/projects/construction/after_RE.jpg",
  ],
  HVAC: [
    "/projects/hvac/ACcondenser.jpg",
    "/projects/hvac/GIBSON.jpg",
    "/projects/hvac/RHEEM_rheem.jpg",
    "/projects/hvac/Schematics.jpg",
    "/projects/hvac/carrier_DoneR.jpg",
    "/projects/hvac/carrier_codeV.jpg",
    "/projects/hvac/ductwork.jpg",
    "/projects/hvac/ductwork_returnsupply.jpg",
    "/projects/hvac/rheem.jpg",
    "/projects/hvac/rheem_OG.jpg",
  ],
  Solar: [
    "/projects/solar/front_solar.jpg",
    "/projects/solar/roof_view.jpg",
    "/projects/solar/solar.jpg",
  ],
};

export default function ProjectsPage() {
  const tabs = Object.keys(PHOTOS);
  const [active, setActive] = useState(tabs[0]);
  const [lightbox, setLightbox] = useState(null);

  const imgs = (PHOTOS[active] || []).filter(Boolean);

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem" }}>
      {/* Back button */}
      <div style={{ marginBottom: 16 }}>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 style={{ fontSize: "1.875rem", fontWeight: 600, marginBottom: "1rem" }}>
        Our Work
      </h1>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            style={{
              padding: "8px 16px",
              borderRadius: 9999,
              border: "1px solid #000",
              background: active === t ? "#000" : "#fff",
              color: active === t ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      {imgs.length === 0 ? (
        <p>
          No photos found in <code>/public/projects/{active.toLowerCase()}</code>.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fill, minmax(240px, 1fr) )",
            gap: 12,
          }}
        >
          {imgs.map((src) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 0,
                overflow: "hidden",
                cursor: "zoom-in",
                background: "#fff",
              }}
              title={src}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 50,
            cursor: "zoom-out",
          }}
        >
          <img src={lightbox} alt="" style={{ maxWidth: "100%", maxHeight: "90vh" }} />
        </div>
      )}
    </main>
  );
}

