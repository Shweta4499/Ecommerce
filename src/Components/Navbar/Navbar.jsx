import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false); 
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" height="50px" />
        <p>TrendiCart</p>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <IoMdClose size={26} /> : <GiHamburgerMenu size={24} />}
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
        <li onClick={() => handleMenuClick("home")}>
          <Link to="/" className="nav-link">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("mens")}>
          <Link to="/mens" className="nav-link">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("womens")}>
          <Link to="/womens" className="nav-link">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("kids")}>
          <Link to="/kids" className="nav-link">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
