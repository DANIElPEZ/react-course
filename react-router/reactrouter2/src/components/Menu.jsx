import { NavLink } from "react-router-dom";
import { useAuth } from "./../context/auth";
import "./styleMenu.css";
//array con rutas
const routes = [];
routes.push({ to: "/", text: "Home", private: false });
routes.push({ to: "/Blog", text: "Blog", private: false });
routes.push({ to: "/Profile", text: "Profile", private: true});
routes.push({ to: "/login", text: "Login", private: false, publicOnly: true  });
routes.push({ to: "/logout", text: "Logout", private: true });

export function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if(route.publicOnly && auth.user) return null;
          if (!auth.user && route.private) return null;
          return (
            <li key={route.to}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "linkActive" : "linkUnActive"
                }
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
