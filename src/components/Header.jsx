import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import logo from "../starter-code/assets/shared/logo.svg"
export default function Header(){
    const icon =document.querySelector('.icon')
    const header=document.querySelector('.header')
    function clickonbarhandler(){
         icon.addEventListener('click',()=>{
             header.classList.toggle('show')
         })
    }
    return(
       <>
       <header className="header">
           <Link to="/">
              <img src={logo}></img>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/Destination"><span>Destination</span></Link></li>
                    <li><Link to="/Crew"><span>Crew</span></Link></li>
                    <li><Link to="/Technology"><span>Technology</span></Link></li>
                </ul>
                {/* <div className="icon">
                <FaBars onClick={clickonbarhandler} />
                </div> */}
            </nav>
         </header>
       </>
    )
}
