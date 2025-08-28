import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-4 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">
              Chicago
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">
              HVAC
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">
              Solar
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm">
              General Contracting
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Build it right. <br />
            Power it clean.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            New Day Construction LLC helps families and developers across
            Chicagoland with HVAC, solar energy, and quality construction—
            delivered with honesty, craft, and community heart.
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
          <div className="mt-6 flex gap-6 text-sm text-gray-600">
            <span>✔ Licensed, bonded & insured</span>
            <span>✔ Permit & inspection ready</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Serving Chicago & suburbs
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/projects/construction/before_RE.jpg"
            alt="Construction work before remodel"
            className="rounded-xl shadow-md"
          />
          <img
            src="/projects/construction/after_RE.jpg"
            alt="Construction work after remodel"
            className="rounded-xl shadow-md"
          />
          <img
            src="/projects/solar/front solar.jpg"
            alt="Solar installation front view"
            className="rounded-xl shadow-md col-span-2"
          />
        </div>
      </section>
    </main>
  );
}
