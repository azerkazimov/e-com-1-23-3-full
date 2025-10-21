import { Navigate, Outlet } from "react-router-dom";
import Loading from "../ui/loading";
import useAuthStore from "@/store/auth.store";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, isAuthenticated } = useAuthStore();
  if (loading) {
    return <Loading />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div className="protected-layout">
      <Outlet />
      {children}
    </div>
  );
}
