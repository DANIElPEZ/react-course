import React from "react";
import { useAuth } from "../context/auth";
import { Navigate } from "react-router-dom";


export function LoginPage() {
  const auth=useAuth();
  const [nameText, setNameText] = React.useState("");

  const login=e=>{
    e.preventDefault();
    auth.login(nameText);
  };

  if(auth.user) return <Navigate to="/profile"/>
  
  return (
    <>
      <h1>Login in</h1>
      <form onSubmit={login}>
        <input
          placeholder="Nombre"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
