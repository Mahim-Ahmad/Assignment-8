const API_URL = import.meta.env.VITE_API_URL;

export async function getAllAnimals(sort) {
  const query = sort ? `?sort=${sort}` : "";
  const res = await fetch(`${API_URL}/api/animals${query}`);
  if (!res.ok) throw new Error("Failed to load animals");
  return res.json();
}

export async function getFeaturedAnimals() {
  const res = await fetch(`${API_URL}/api/animals/featured`);
  if (!res.ok) throw new Error("Failed to load featured animals");
  return res.json();
}

export async function getAnimalById(id) {
  const res = await fetch(`${API_URL}/api/animals/${id}`);
  if (!res.ok) throw new Error("Animal not found");
  return res.json();
}
