// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-4 flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">Chicago</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">HVAC</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">Solar</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">General Contracting</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Build it right. <br />
            Power it clean.
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            New Day Construction LLC helps families and developers across
            Chicagoland with HVAC, solar energy, and quality construction—delivered
            with honesty, craft, and community heart.
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-full border bg-black text-white hover:opacity-90"
            >
              Request a quote
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white"
            >
              See our work
            </Link>
          </div>

          <div className="mt-6 flex gap-6 text-sm text-gray-600 flex-wrap">
            <span>✔ Licensed, bonded & insured</span>
            <span>✔ Permit & inspection ready</span>
            <span>✔ Serving Chicago & suburbs</span>
          </div>
        </div>

        {/* Right column intentionally empty to keep homepage clean */}
        <div className="hidden md:block" />
      </section>
    </main>
  );
}
