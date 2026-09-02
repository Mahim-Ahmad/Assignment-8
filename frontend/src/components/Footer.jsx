import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-gold)] text-xs font-bold text-[var(--color-ink)]">
              Q
            </span>
            <span className="font-display text-lg font-semibold">QurbaniHat</span>
          </div>
          <p className="max-w-xs text-sm text-[var(--color-muted)]">
            A trusted marketplace connecting farms across Bangladesh with families preparing for Qurbani —
            healthy animals, transparent pricing, simple booking.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-[var(--color-paper)]">Explore</h4>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>
              <Link to="/" className="hover:text-[var(--color-gold)]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/animals" className="hover:text-[var(--color-gold)]">
                All Animals
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[var(--color-gold)]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-[var(--color-paper)]">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>House 12, Road 5, Dhanmondi, Dhaka</li>
            <li>support@qurbanihat.com</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {["Facebook", "Instagram", "WhatsApp"].map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] py-5 text-center text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}
