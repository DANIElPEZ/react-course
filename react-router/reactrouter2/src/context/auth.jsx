import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const AuthContext = React.createContext();

const adminList=['Daniel', 'Karoll', 'Jade'];

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = (user) => {
    const isAdmin=adminList.find(admin=>admin===user);
    setUser({ user, isAdmin});
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const authValues = { user, login, logout };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export function ValidRoute({children}){
  const auth = useAuth();
  if (!auth.user) return <Navigate to="/login"/>;
  return children;
}