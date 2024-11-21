import { Link, Outlet } from "react-router-dom";
import { blogdata } from '../data/blogdata';

export function BlogPage(){
     return(
          <>
               <h1>blog page</h1>

               <Outlet/>

               <ul>
                    {blogdata.map(post=>( <BlogLink key={post.slug} post={post}/> ))}
               </ul>
          </>
     );
}

function BlogLink({post}){
     return(
          <li>
               <Link to={`/Blog/${post.slug}`}>{post.title}</Link>
          </li>
     );
}