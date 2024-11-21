import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from "../data/blogdata";
import { useAuth } from "./../context/auth";

export function BlogPost() {
  const { slug } = useParams();
  const post = blogdata.find((post) => post.slug === slug);

  const auth=useAuth();
  const canDelete=auth.user?.isAdmin || post.author === auth.user?.user;

  const navigate = useNavigate();
  const returnToBlog = () => {
    navigate("/blog");
  };
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{post.content}</p>
      {canDelete&&(
          <button>Borrar</button>
      )}
    </>
  );
}
