import React from 'react';
import "./navbar.css";
import logo from  "../../assets/logo.png";
import { Link } from 'react-scroll';
import contactImg from  "../../assets/contact.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className="logo"/>
        <div className='desktopMenu'>
            <Link to="home" spy={true} smooth={true} className='desktopMenuListItem'>Home</Link>
            <Link to="about" spy={true} smooth={true} className='desktopMenuListItem'>About</Link>
            <Link to="portfolio" spy={true} smooth={true} className='desktopMenuListItem'>Portfolio</Link>
            <Link to="client" spy={true} smooth={true} className='desktopMenuListItem'>Client</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='' className='desktopMenuImg'/>Contact me
        </button>
    </nav>
  )
}

export default Navbar;
