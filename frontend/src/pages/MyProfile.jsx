import { Link } from "react-router-dom";
import { useSession } from "../lib/auth-client";

export default function MyProfile() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <img
        src={user?.image || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}`}
        alt={user?.name}
        className="mb-6 h-28 w-28 rounded-full border-2 border-[var(--color-gold)] object-cover"
      />
      <h1 className="font-display text-2xl font-semibold">{user?.name}</h1>
      <p className="mt-1 text-[var(--color-muted)]">{user?.email}</p>

      <Link to="/my-profile/update" className="btn-gold mt-8">
        Update Information
      </Link>
    </div>
  );
}
