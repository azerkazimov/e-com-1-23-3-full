import Home from "../pages/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile";
import ProtectedLayout from "@/components/layout/protected.layout";
import AuthLayout from "@/components/layout/auth.layout";


export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: (
      <AuthLayout/>
    ),
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
];
