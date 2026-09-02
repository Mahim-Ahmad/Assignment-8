import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeaturedAnimals } from "../lib/api";
import AnimalCard from "../components/AnimalCard";
import Testimonials from "../components/Testimonials";

const TIPS = [
  {
    title: "Check the teeth",
    body: "A healthy Qurbani animal should have all permanent incisors — this is the simplest way to confirm age.",
  },
  {
    title: "Watch how it moves",
    body: "An animal that walks and breathes normally, without limping, is a good sign of overall health.",
  },
  {
    title: "Ask for vaccination records",
    body: "Reputable farms keep a record of deworming and vaccination — always ask before booking.",
  },
];

const BREEDS = [
  { name: "Deshi", note: "Local, low-fat, widely available" },
  { name: "Sahiwal", note: "Strong build, disease resistant" },
  { name: "Black Bengal", note: "Tender meat, popular goat breed" },
  { name: "Jamunapari", note: "Tall goat, good meat ratio" },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedAnimals()
      .then(setFeatured)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="glow-circle h-96 w-96 bg-[var(--color-gold)]/20 -right-32 -top-32" />
        <div className="glow-circle h-64 w-64 bg-[var(--color-gold)]/10 left-10 bottom-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="mb-4 inline-block rounded-full border border-[var(--color-line)] px-4 py-1 text-xs text-[var(--color-gold)]">
              Qurbani Season, Simplified
            </span>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Find a healthy animal for your Qurbani, straight from trusted farms.
            </h1>
            <p className="mb-8 max-w-md text-[var(--color-muted)]">
              Browse verified cows and goats with transparent pricing, real details, and a booking process
              that takes less than two minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/animals" className="btn-gold">
                Browse Animals
              </Link>
              <Link to="/register" className="btn-outline">
                Create an Account
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full border border-[var(--color-line)]" />
            <div className="absolute inset-6 rounded-full border border-[var(--color-gold)]/40" />
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800"
              alt="Cow raised for Qurbani"
              className="absolute inset-10 h-[calc(100%-5rem)] w-[calc(100%-5rem)] rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured animals */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold">Featured Animals</h2>
            <p className="mt-2 text-[var(--color-muted)]">A few picks currently getting the most bookings.</p>
          </div>
          <Link to="/animals" className="hidden text-sm text-[var(--color-gold)] hover:underline md:block">
            View all →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card h-80 animate-pulse bg-[var(--color-surface-2)]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </section>

      {/* Qurbani Tips */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 font-display text-3xl font-semibold">Qurbani Tips</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {TIPS.map((tip) => (
              <div key={tip.title} className="card p-6">
                <h3 className="mb-2 font-display text-lg font-semibold text-[var(--color-gold)]">{tip.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeds */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 font-display text-3xl font-semibold">Top Breeds</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BREEDS.map((b) => (
            <div key={b.name} className="rounded-xl border border-[var(--color-line)] p-5">
              <h3 className="mb-1 font-semibold">{b.name}</h3>
              <p className="text-sm text-[var(--color-muted)]">{b.note}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
