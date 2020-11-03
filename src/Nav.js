import React from 'react'
import './Nav.css';
import logo from './Image/Netflix_Logo.png';
import avatar from './Image/netflix_avatar.jpg';
import {useState ,useEffect} from 'react';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);






    return (
        <div className={`nav ${show && " nav_black"}`}>
            <img className="nav_logo" 
            src={logo} 
            alt="netflixLogo" />

            <img className="nav_avatar" 
            src={avatar}
            alt="netflixAvatar"/>
        </div>
    )
}

export default Nav
