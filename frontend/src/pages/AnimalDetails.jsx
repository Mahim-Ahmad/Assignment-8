import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getAnimalById } from "../lib/api";
import { useSession } from "../lib/auth-client";

export default function AnimalDetails() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLoading(true);
    getAnimalById(id)
      .then(setAnimal)
      .catch(() => setAnimal(null))
      .finally(() => setLoading(false));
  }, [id]);

  function onSubmit() {
    // Per assignment spec: booking is not persisted to DB or Local Storage.
    toast.success("Booking request submitted!");
    reset();
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-gold)]" />
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-[var(--color-muted)]">Animal not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <img src={animal.image} alt={animal.name} className="w-full rounded-2xl object-cover" />
          <div className="card mt-6 grid grid-cols-2 gap-4 p-6 text-sm">
            <div>
              <span className="field-label">Breed</span>
              <p>{animal.breed}</p>
            </div>
            <div>
              <span className="field-label">Type</span>
              <p>{animal.type}</p>
            </div>
            <div>
              <span className="field-label">Weight</span>
              <p>{animal.weight} kg</p>
            </div>
            <div>
              <span className="field-label">Age</span>
              <p>{animal.age} years</p>
            </div>
            <div>
              <span className="field-label">Location</span>
              <p>{animal.location}</p>
            </div>
            <div>
              <span className="field-label">Category</span>
              <p>{animal.category}</p>
            </div>
          </div>
        </div>

        <div>
          <span className="mb-2 inline-block rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-gold)]">
            {animal.category}
          </span>
          <h1 className="mb-3 font-display text-3xl font-semibold">{animal.name}</h1>
          <p className="mb-4 font-display text-2xl font-semibold text-[var(--color-gold)]">
            ৳{animal.price.toLocaleString("en-BD")}
          </p>
          <p className="mb-8 text-[var(--color-muted)]">{animal.description}</p>

          <div className="card p-6">
            <h2 className="mb-5 font-display text-xl font-semibold">Book This Animal</h2>

            {!session ? (
              <p className="text-sm text-[var(--color-muted)]">
                Please{" "}
                <a href="/login" className="text-[var(--color-gold)] hover:underline">
                  log in
                </a>{" "}
                to book this animal.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="field-label">Full Name</label>
                  <input
                    className="field-input"
                    defaultValue={session.user.name}
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="mt-1 text-xs text-[var(--color-warn)]">Name is required</p>}
                </div>
                <div>
                  <label className="field-label">Email</label>
                  <input
                    className="field-input"
                    defaultValue={session.user.email}
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="mt-1 text-xs text-[var(--color-warn)]">Email is required</p>}
                </div>
                <div>
                  <label className="field-label">Phone</label>
                  <input className="field-input" {...register("phone", { required: true })} />
                  {errors.phone && <p className="mt-1 text-xs text-[var(--color-warn)]">Phone is required</p>}
                </div>
                <div>
                  <label className="field-label">Delivery Address</label>
                  <textarea rows={3} className="field-input" {...register("address", { required: true })} />
                  {errors.address && <p className="mt-1 text-xs text-[var(--color-warn)]">Address is required</p>}
                </div>
                <button type="submit" className="btn-gold w-full">
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
