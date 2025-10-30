import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import useAuthStore from "@/store/auth.store";
import Loading from "../ui/loading";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { User2 } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { user, isAuthenticated, loading } = useAuthStore();

  if (loading) {
    return <Loading />;
  }

  const isAdmin = user?.role === "admin" || user?.role === "super_admin";


  const navLinkClass = (path: string) => `
     py-2  font-medium transition-all duration-200 relative 
    after:content-[''] after:absolute after:bottom-0 after:left-0
    after:h-[2px] after:bg-[#735CFF] after:transition-all after:duration-300
    ${
      isActive(path)
        ? "text-[#735CFF] font-bold after:w-[30%]"
        : "text-black/80 after:w-0"
    }
    hover:after:w-full
  `;
  return (
    <div className="fixed w-full z-50 top-0">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="flex py-8">
            <img src="/logo.png" alt="logo" className="object-cover" />
          </div>
          <div className="flex items-center gap-8">
            <ul className="flex gap-12 items-center">
              <li>
                <Link to="/" className={navLinkClass("/")}>
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className={navLinkClass("/accessories")}
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/jewerly" className={navLinkClass("/jewerly")}>
                  Jewerly
                </Link>
              </li>
              <li>
                <Link to="/brand" className={navLinkClass("/brand")}>
                  Brand
                </Link>
              </li>
              <li>
                <Link to="/watches" className={navLinkClass("/watches")}>
                  Watches
                </Link>
              </li>
            </ul>
            <Button className="bg-[#735CFF] rounded-md p-6 text-white cursor-pointer">
              Design you watch
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <User2/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {isAuthenticated ? (
                  <>
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem>
                      <Link to="/admin">Admin</Link>
                    </DropdownMenuItem>
                  )}
                  </>
                ) : (
                  <DropdownMenuItem>
                    <Link to="/auth/login">Login</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
