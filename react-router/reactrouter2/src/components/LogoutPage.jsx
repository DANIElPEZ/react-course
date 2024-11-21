import { useAuth } from "../context/auth";

export function LogoutPage() {
  const auth=useAuth();

  const logout=e=>{
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>Log out</h1>
      <form onSubmit={logout}>
        <button type="submit">Salir</button>
      </form>
    </>
  );
}
