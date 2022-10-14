import React from "react";

const Navbar = () => {
    return (
        <div className="nav-menu">
            <div className="menu">

                <nav>
                    
                        <ul>
                            <li>
                            <div><img class="img1" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="logo" /></div>
                            </li>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#work">PORTFOLIO</a></li>
                            <li><a href="#clients">CONTACT</a></li>
                        </ul>

                   
                </nav>
            </div>
        </div>
    );
};

export default Navbar;