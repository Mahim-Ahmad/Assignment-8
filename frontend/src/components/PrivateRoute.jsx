import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "../lib/auth-client";

export default function PrivateRoute({ children }) {
  const { data: session, isPending } = useSession();
  const location = useLocation();

  if (isPending) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-gold)]" />
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
