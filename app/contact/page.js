// app/contact/page.js
"use client";
import "../globals.css";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      // Replace with your own endpoint if you prefer
      const resp = await fetch("https://formspree.io/f/mayvlwyy", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(resp.ok ? "sent" : "error");
      if (resp.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="section">
      <h2>Contact</h2>

     <form
  action="https://formspree.io/f/mayvlwyy"
  method="POST"
  className="card"
  style={{ display:"grid", gap:12, maxWidth:560 }}
>
  <input type="hidden" name="_subject" value="New Day Construction — Website Lead" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://www.newdayconstruction.org/contact?sent=1" />
> <input name="name" required />
<input type="email" name="email" required />
<input name="phone" />
<textarea name="message" rows={5} />
<button className="cta" type="submit">Send</button>

  {typeof window!=="undefined" && new URLSearchParams(window.location.search).get("sent")==="1" &&
  <p style={{color:"#22d3ee"}}>Thanks — we’ll reply shortly.</p>}

        <button className="cta" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && <p style={{ color: "#22d3ee" }}>Thanks — we’ll reply shortly.</p>}
        {status === "error" && <p style={{ color: "#f87171" }}>Something went wrong. Try again.</p>}
      </form>

      {/* Buttons row */}
      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="mailto:NewDayConstruction606@gmail.com" className="btn" style={{ textAlign: "center" }}>
          📧 Email Us
        </a>
        <a
          href="https://www.facebook.com/share/16sx3nwB4N/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ background: "#1877f2", color: "#fff", fontWeight: 700 }}
        >
          👍 Visit us on Facebook
        </a>
      </div>
    </div>
  );
}
