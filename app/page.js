// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div>
          <h1>Powering homes and small businesses across Chicago</h1>
          <p>
            New Day Construction LLC is a community-rooted, licensed contractor
            delivering solar installs, HVAC service, and construction—done right,
            safely, and on time.
          </p>
          <div style={{ display:"flex", gap:12, marginTop:12 }}>
            <a className="cta" href="/contact">Get a quote</a>
            <a className="btn" href="/projects">See our work</a>
          </div>
          <div className="kpis" style={{ marginTop:18 }}>
            <div className="kpi"><strong>HVAC</strong><br/>Installs & tune-ups</div>
            <div className="kpi"><strong>Solar</strong><br/>Design & install</div>
            <div className="kpi"><strong>Construction</strong><br/>Remodels & repairs</div>
          </div>
        </div>

        {/* Uses existing /public/after_RE.jpg so no new uploads needed */}
        <div className="card">
          <Image
            src="/after_RE.jpg"
            alt="Recent NDC project"
            width={1200}
            height={800}
            style={{ width:"100%", height:"auto", borderRadius:12 }}
            priority
          />
          <p style={{ color:"#9ca3af", marginTop:8 }}>
            Ask about utility rebates and Illinois Solar for All.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>HVAC</h3>
            <p>Furnaces, AC, heat pumps, ductwork, smart thermostats, and maintenance plans.</p>
          </div>
          <div className="card">
            <h3>Solar</h3>
            <p>Site assessment, system design, permits, installation, and monitoring setup.</p>
          </div>
          <div className="card">
            <h3>Construction</h3>
            <p>Kitchens, baths, flooring, drywall, painting, and light commercial projects.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About</h2>
        <div className="grid grid-2">
          <div className="card">
            <p>
              Led by CEO Carlos Zaruma and owner Jacqueline Salazar, NDC blends craftsmanship
              with clean-energy expertise to deliver safe, efficient projects for families and developers.
            </p>
          </div>
          <div className="card">
            <ul>
              <li>Distributed Generator (DG) License</li>
              <li>HVAC Licensed</li>
              <li>General Contractor</li>
              <li>Illinois Solar for All Approved Vendor (2025)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="card" style={{
          display:"flex", justifyContent:"space-between", alignItems:"center",
          gap:12, flexWrap:"wrap"
        }}>
          <div>
            <h3 style={{ margin:"0 0 6px" }}>Ready to start?</h3>
            <p style={{ margin:0, color:"#9ca3af" }}>
              Book a walkthrough or send plans — we’ll price it fast.
            </p>
          </div>
          <a className="cta" href="/contact">Contact us</a>
        </div>
      </section>
    </div>
  );
}
