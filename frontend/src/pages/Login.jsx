import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { signIn } from "../lib/auth-client";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  async function onSubmit(data) {
    setServerError("");
    setLoading(true);
    const { error } = await signIn.email({ email: data.email, password: data.password });
    setLoading(false);

    if (error) {
      setServerError(error.message || "Invalid email or password");
      toast.error(error.message || "Login failed");
      return;
    }
    toast.success("Logged in successfully");
    navigate(from, { replace: true });
  }

  async function handleGoogle() {
    await signIn.social({ provider: "google", callbackURL: window.location.origin + "/" });
  }

  return (
    <div className="mx-auto flex min-h-[75vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="mb-1 font-display text-3xl font-semibold">Welcome back</h1>
      <p className="mb-8 text-sm text-[var(--color-muted)]">Log in to book your Qurbani animal.</p>

      {serverError && (
        <div className="mb-4 rounded-lg border border-[var(--color-warn)]/40 bg-[var(--color-warn)]/10 px-4 py-3 text-sm text-[var(--color-warn)]">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="field-label">Email</label>
          <input
            type="email"
            className="field-input"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="mt-1 text-xs text-[var(--color-warn)]">{errors.email.message}</p>}
        </div>
        <div>
          <label className="field-label">Password</label>
          <input
            type="password"
            className="field-input"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="mt-1 text-xs text-[var(--color-warn)]">{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-60">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-[var(--color-line)]" />
        <span className="text-xs text-[var(--color-muted)]">or</span>
        <div className="h-px flex-1 bg-[var(--color-line)]" />
      </div>

      <button onClick={handleGoogle} className="btn-outline w-full">
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
        Don't have an account?{" "}
        <Link to="/register" className="text-[var(--color-gold)] hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
