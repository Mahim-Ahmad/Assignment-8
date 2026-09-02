import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  return (
    <div className="card group overflow-hidden animate__animated animate__fadeIn">
      <div className="relative h-48 overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-ink)]/80 px-3 py-1 text-xs text-[var(--color-gold)]">
          {animal.category}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{animal.name}</h3>
        </div>
        <p className="mb-3 text-sm text-[var(--color-muted)]">
          {animal.breed} · {animal.location}
        </p>
        <div className="mb-4 flex items-center justify-between text-sm text-[var(--color-muted)]">
          <span>{animal.weight} kg</span>
          <span>{animal.age} yrs</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-[var(--color-gold)]">
            ৳{animal.price.toLocaleString("en-BD")}
          </span>
          <Link to={`/details-page/${animal.id}`} className="btn-outline px-4 py-2 text-xs">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
