import React, { useEffect, useState } from 'react';
import logo from './photo/netflix1.png'
import './Nav.css'

function Nav(){

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return(
        <div className={`nav col-12 ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src={logo}
            alt="Neflix" />
        </div>
    );

}

export default Nav;