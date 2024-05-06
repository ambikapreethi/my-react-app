import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Home } from "./home";
import { Blogs } from "./blogs";
import { Nopage } from "./Nopage.js";
import { Range } from "./range.js";
import { Welcome } from "./welcome.js";
import Apple from "../component/apple.js";
export default function Routerexample()
{
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Home/>}></Route>
                <Route path="blogs" element={<Blogs/>}></Route>
                <Route path="apple" element={<Apple/>}></Route>
                <Route path="range" element={<Range/>}></Route>
                <Route path="welcome" element={<Welcome/>}></Route>
                <Route path="*" element={<Nopage/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}