import { useAuth } from "./../context/auth";

export function ProfilePage() {
  const auth = useAuth();
  
  return (
    <>
      <p>Hola, {auth.user.user}</p>
    </>
  );
}
