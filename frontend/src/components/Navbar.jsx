import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession, signOut } from "../lib/auth-client";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    toast.success("Logged out");
    navigate("/");
  }

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? "text-[var(--color-gold)]" : "text-[var(--color-muted)] hover:text-[var(--color-paper)]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-ink)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)] font-display text-sm font-bold text-[var(--color-ink)]">
            Q
          </span>
          <span className="font-display text-lg font-semibold">QurbaniHat</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/animals" className={linkClass}>
            All Animals
          </NavLink>
          {session && (
            <NavLink to="/my-profile" className={linkClass}>
              My Profile
            </NavLink>
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isPending ? null : session ? (
            <>
              <Link to="/my-profile" title={session.user.name}>
                <img
                  src={session.user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${session.user.name}`}
                  alt={session.user.name}
                  className="h-9 w-9 rounded-full border border-[var(--color-line)] object-cover"
                />
              </Link>
              <button onClick={handleLogout} className="btn-outline text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline text-sm">
                Login
              </Link>
              <Link to="/register" className="btn-gold text-sm">
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="text-[var(--color-paper)] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[var(--color-line)] px-6 py-4 md:hidden">
          <NavLink to="/" className={linkClass} end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/animals" className={linkClass} onClick={() => setMenuOpen(false)}>
            All Animals
          </NavLink>
          {session ? (
            <>
              <NavLink to="/my-profile" className={linkClass} onClick={() => setMenuOpen(false)}>
                My Profile
              </NavLink>
              <button onClick={handleLogout} className="btn-outline text-sm w-fit">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline text-sm w-fit" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="btn-gold text-sm w-fit" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
