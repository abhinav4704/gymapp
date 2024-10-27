import React from "react";
import {Link,Outlet} from "react-router-dom"
import  "./navbar.css"
import {Exercisessvg, Homesvg, Logoutsvg, Profilesvg, Progressionsvg} from "../assets/exercising";

function NavBar(){
    return(
        <div>
        <nav className="navbar">
            <h1 className="navtitle">ProGym</h1>
            <div className="link-container">
            <ul className="navlist">
                <li>
                <Link to="/" className="link">Home</Link>
                </li>
                <li>
                <Link to="/progression" className="link">Progress</Link>
                </li>
                <li>
                <Link to="/exercises"className="link">My-Exercises</Link>
                </li>
                <li>
                <Link to="/profile"className="link">Profile</Link>
                </li>
                <li>
                    <button className="logout-btn">logout</button>
                </li>
            </ul>
            </div>
            
        </nav>
        <nav className="mobile-nav">
        <div className="link-container">
            <ul className="navlist">
                <li>
                <Link to="/" className="link"><Homesvg/></Link>
                </li>
                <li>
                <Link to="/progression" className="link"><Progressionsvg/></Link>
                </li>
                <li>
                <Link to="/exercises"className="link"><Exercisessvg/></Link>
                </li>
                <li>
                <Link to="/profile"className="link"><Profilesvg/></Link>
                </li>
                <li>
                    <button id="logout-btn"><Logoutsvg/></button>
                </li>
            </ul>
            </div>
        </nav>
        <Outlet/>       



            </div>
      
    )
}

export default NavBar;