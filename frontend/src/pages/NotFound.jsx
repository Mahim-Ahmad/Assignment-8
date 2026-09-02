import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="glow-circle h-72 w-72 bg-[var(--color-gold)]/15" />
      <p className="relative font-display text-7xl font-semibold text-[var(--color-gold)]">404</p>
      <h1 className="relative mt-4 font-display text-2xl font-semibold">This page wandered off the farm</h1>
      <p className="relative mt-2 max-w-sm text-[var(--color-muted)]">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-gold relative mt-8">
        Back to Home
      </Link>
    </div>
  );
}
