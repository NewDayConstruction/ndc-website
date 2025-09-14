// app/contact/page.js
export const metadata = { title: "Contact — New Day Construction LLC" };

export default function Contact({ searchParams }) {
  const sent = searchParams?.sent === "1";

  return (
    <div className="section" id="contact">
      <h2>Contact</h2>

      {/* Success message after redirect */}
      {sent && (
        <p style={{ color: "#22d3ee", marginBottom: 12 }}>
          Thanks — we’ll reply shortly.
        </p>
      )}

      <form
        action="https://formspree.io/f/mayvlwyy"
        method="POST"
        className="card"
        style={{ display: "grid", gap: 12, maxWidth: 560 }}
      >
        {/* Formspree options */}
        <input type="hidden" name="_subject" value="New Day Construction — Website Lead" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect back to this page with ?sent=1 */}
        <input type="hidden" name="_next" value="https://www.newdayconstruction.org/contact?sent=1" />
        {/* Honeypot (spam trap) */}
        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <label>
          Name
          <input name="name" placeholder="Full name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@email.com" required />
        </label>

        <label>
          Phone
          <input name="phone" placeholder="(773) 699-7266" />
        </label>

        <label>
          Project details
          <textarea name="message" rows={5} placeholder="Tell us about your project…" />
        </label>

        <button className="cta" type="submit">Send</button>
      </form>

      {/* Quick contact buttons */}
      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn" href="tel:+17736997266">📞 Call/Text: (773) 699-7266</a>
        <a className="btn" href="mailto:NewDayConstruction606@gmail.com">📧 Email Us</a>
        <a
          className="btn"
          href="https://www.facebook.com/share/16sx3nwB4N/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#1877f2", color: "#fff", fontWeight: 700 }}
        >
          👍 Visit us on Facebook
        </a>
      </div>
    </div>
  );
}
