import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSession, updateUser } from "../lib/auth-client";

export default function UpdateInfo() {
  const { data: session } = useSession();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: session?.user?.name || "",
      image: session?.user?.image || "",
    },
  });

  async function onSubmit(data) {
    setLoading(true);
    // better-auth client: updateUser({ name, image }) updates the current session's user
    const { error } = await updateUser({ name: data.name, image: data.image || undefined });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }
    toast.success("Profile updated");
    navigate("/my-profile");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="mb-1 font-display text-2xl font-semibold">Update Information</h1>
      <p className="mb-8 text-sm text-[var(--color-muted)]">Update your display name and photo.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="field-label">Image URL</label>
          <input className="field-input" placeholder="https://..." {...register("image")} />
        </div>
        <div>
          <label className="field-label">Name</label>
          <input className="field-input" {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="mt-1 text-xs text-[var(--color-warn)]">{errors.name.message}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-60">
          {loading ? "Saving..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}
