import Home from "../pages/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile";
import ProtectedLayout from "@/components/layout/protected.layout";
import AuthLayout from "@/components/layout/auth.layout";
import Products from "@/pages/products/product";
import AdminDashboard from "@/pages/admin/admin-dashboard";
import UserManager from "@/pages/admin/user-managment";
import MainLayout from "@/components/layout/main.layout";
import Accessories from "@/pages/accessories/accessories";
import Jewerly from "@/pages/jewerly/jewerly";
import Brand from "@/pages/brand/brand";
import ProductAdmin from "@/pages/products/product-admin";

export const Routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watches",
        element: <Products />,
      },
      
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/jewerly",
        element: <Jewerly />,
      },
      {
        path: "/brand",
        element: <Brand />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedLayout>
        <Profile />
      </ProtectedLayout>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedLayout requiredRoles={["admin", "super_admin"]}>
        <AdminDashboard />
      </ProtectedLayout>
      
    ),
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedLayout requiredRoles={["admin", "super_admin"]}>
        <ProductAdmin />
      </ProtectedLayout>
      
    ),
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedLayout requiredRoles={["super_admin"]}>
        <UserManager />
      </ProtectedLayout>
    ),
  },
];
