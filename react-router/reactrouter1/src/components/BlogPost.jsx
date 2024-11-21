import { useParams, useNavigate} from "react-router-dom";
import { blogdata } from '../data/blogdata';

export function BlogPost(){
     const {slug}=useParams();
     const post=blogdata.find(post=>post.slug===slug);

     const navigate=useNavigate();
     const returnToBlog=()=>{
          navigate('/blog');
     };
     return(
          <>
               <h1>{post.title}</h1>
               <button onClick={returnToBlog}>Volver al blog</button>
               <p>{post.content}</p>
          </>
     );
}