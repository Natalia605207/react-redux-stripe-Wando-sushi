import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import TotalArticlesNavbar from "../Cart/TotalArticlesNavbar";

const Navbar = ({active, setActive}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toggleCart = () => {
        setActive(!active);
    };

    return (
        <nav className="NavbarItems sticky">
            <div className="company-block">
                <Link to="/" className="navbar-logo">
                <p className="company-name"><span className="wando">WANDO </span>Sushi</p>
                </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <FaBars className="bar" />
            </div>
            <div className={click ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/promo" className="nav-link" onClick={closeMobileMenu}>Promo</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/delivery" className="nav-link" onClick={closeMobileMenu}>Delivery</Link>
                        </li>
                </ul>
            </div>
            <div className="cart-quantity">
                <button onClick={toggleCart} className="cart-btn"> 
                    <FaShoppingBag className="cart-icon" />
                </button>
                <TotalArticlesNavbar />
            </div>
        </nav>
    );
}

export default Navbar;