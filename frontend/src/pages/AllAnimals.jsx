import { useEffect, useState } from "react";
import { getAllAnimals } from "../lib/api";
import AnimalCard from "../components/AnimalCard";

export default function AllAnimals() {
  const [animals, setAnimals] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllAnimals(sort)
      .then(setAnimals)
      .finally(() => setLoading(false));
  }, [sort]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">All Animals</h1>
          <p className="mt-2 text-[var(--color-muted)]">{animals.length} animals available for Qurbani</p>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-[var(--color-muted)]">
            Sort by price
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="field-input w-auto"
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card h-80 animate-pulse bg-[var(--color-surface-2)]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}
