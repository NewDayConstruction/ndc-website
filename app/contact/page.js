// app/contact/page.js

export const metadata = {
  title: "Contact — New Day Construction LLC",
  description: "Get in touch with New Day Construction LLC for solar, HVAC, and construction projects across Chicago.",
};

export default function Contact() {
  return (
    <div className="section" id="contact" style={{ display: "grid", gap: 24, maxWidth: 900 }}>
      <h2>Let’s talk</h2>
      <p>Tell us about your project and timeline. We’ll reply the same day.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: 24,
          alignItems: "start",
        }}
      >
        {/* --- Contact Form --- */}
        <form
          action="https://formspree.io/f/mayvlwyy"
          method="POST"
          className="card"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input type="hidden" name="_subject" value="New Day Construction — Website Lead" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.newdayconstruction.org/contact?sent=1" />

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
            <input name="phone" placeholder="(773) 000-0000" />
          </label>

          <label>
            Project details
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
            />
          </label>

          <button className="cta" type="submit">
            Send →
          </button>
        </form>

        {/* --- Contact Info Column --- */}
        <div className="card" style={{ padding: 20 }}>
          <p>
            <strong>Call/Text</strong><br />
            <a href="tel:+17736997266">773-699-7266</a>
          </p>

          <p>
            <strong>Email</strong><br />
            <a href="mailto:NewDayConstruction606@gmail.com">
              NewDayConstruction606@gmail.com
            </a>
          </p>

          <p><strong>Facebook</strong></p>
          <a
            href="https://www.facebook.com/share/16sx3nwB4N/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              background: "#1877f2",
              color: "#fff",
              fontWeight: 700,
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 6,
              marginTop: 4,
            }}
          >
            👍 Visit us on Facebook
          </a>
        </div>
      </div>

      {/* Thank-you message after redirect */}
      {typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("sent") === "1" && (
          <p style={{ color: "#22d3ee", marginTop: 20 }}>
            Thanks — we’ll reply shortly.
          </p>
        )}
    </div>
  );
}

