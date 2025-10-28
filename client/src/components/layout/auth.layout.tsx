import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/auth.store";
import Loading from "../ui/loading";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) {
    return <Loading />;
  }

  // If user is already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <Outlet />
      {children}
    </div>
  );
}