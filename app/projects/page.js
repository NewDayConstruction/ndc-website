"use client";
import "../globals.css";
import { useState } from "react";

const PHOTOS = {
  Construction: [
    "/projects/construction/before_RE.jpg",
    "/projects/construction/after_RE.jpg",
  ],
  HVAC: [
    "/projects/hvac/ACCondenser.jpg",
    "/projects/hvac/GIBSON.jpg",
  ],
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const all = Object.values(PHOTOS).flat();
  const images = filter === "All" ? all : (PHOTOS[filter] ?? []);

  return (
    <div className="section">
      <h2 style={{marginBottom:12}}>Projects</h2>
      <div style={{display:"flex", gap:10, marginBottom:14}}>
        {["All","Construction","HVAC"].map(f => (
          <button key={f}
            onClick={() => setFilter(f)}
            style={{
              padding:"8px 12px",
              borderRadius:10,
              border:"1px solid #1f2937",
              background: filter===f ? "#22d3ee" : "#0b1325",
              color: filter===f ? "#0b1325":"#e5e7eb"
            }}
          >{f}</button>
        ))}
      </div>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`project-${i}`} loading="lazy"/>
        ))}
      </div>
    </div>
  );
}
