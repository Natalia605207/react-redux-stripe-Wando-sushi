import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineBars2 } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import TotalArticlesNavbar from "../Cart/TotalArticlesNavbar";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="NavbarItems sticky">
            <div className="company-block">
                <Link to="/" className="navbar-logo">
                <p className="company-name"><span className="wando">WANDO </span>Sushi</p>
                </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <HiOutlineXMark className="bar" /> : <HiOutlineBars2 className="bar" />}
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
            <Link to="/cart" className="cart-link">
                <button className="cart-btn"> 
                    <HiOutlineShoppingBag className="cart-icon" />
                </button>
                </Link>
                <TotalArticlesNavbar />
            </div>
        </nav>
    );
}

export default Navbar;