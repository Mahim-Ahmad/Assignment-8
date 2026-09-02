const REVIEWS = [
  {
    name: "Rafiqul Islam",
    location: "Dhanmondi, Dhaka",
    quote:
      "Booked a Deshi cow last year — exactly as described, delivered on time. Made Qurbani planning so much easier.",
  },
  {
    name: "Sultana Begum",
    location: "Uttara, Dhaka",
    quote: "Loved how transparent the pricing was. No haggling, no surprises on delivery day.",
  },
  {
    name: "Kamal Hossain",
    location: "Chattogram",
    quote: "The goat we booked was healthy and well cared for. Will use QurbaniHat again next year.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-display text-3xl font-semibold">What Families Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card p-6">
              <p className="mb-5 text-sm leading-relaxed text-[var(--color-paper)]">“{r.quote}”</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gold)]/20 font-display text-sm font-semibold text-[var(--color-gold)]">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
