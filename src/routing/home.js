import React from "react";
import { Outlet,Link } from "react-router-dom";

export const Home=()=>
{
   return(
    <div>
         <p> <Link to="/Welcome">Home</Link></p>
                    
                    <p> <Link to="/Apple">Apple</Link></p>
                    <p> <Link to="/Range">Range</Link></p>
                     <p><Link to="/Blogs">Blogs</Link></p>

                     <Outlet/>
    </div>
   )
}
