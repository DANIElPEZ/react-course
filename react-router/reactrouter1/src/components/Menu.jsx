import { NavLink } from "react-router-dom";
import './styleMenu.css';
//array con rutas
const routes=[];
routes.push({to:'/',text:'Home'});
routes.push({to:'/Blog',text:'Blog'});
routes.push({to:'/Profile',text:'Profile'});

export function Menu(){
     return(
          <nav>
               <ul>
                    {routes.map(route=>(
                         <li key={route.to}>
                              <NavLink className={({isActive})=>(isActive?'linkActive':'linkUnActive')} to={route.to}>
                                   {route.text}
                              </NavLink>
                         </li>
                    ))}
               </ul>
          </nav>
     );
}