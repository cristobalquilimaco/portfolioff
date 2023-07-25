import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../components/styles/navbar.css"


const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClick, setIsMenuClick] = useState(false);


  const updateMenu = () => {
    if (!isMenuClick) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClick(!isMenuClick);
  };

  return (
<div className="menuprincipal">
<nav className="menu__nav">
        <div className="burger__menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
       
        <div className={`additional-class ${menuClass}`}>
  
  <ul className="aditional__list">
    <div className="box__menu">
    <Link to="/" onClick={updateMenu}><li><i className='bx bxs-home' ><span className="span_font">Home</span></i></li></Link>
    
    </div>
    <div className="box__menu">
    <Link to="/aboutme" onClick={updateMenu} ><li><i className='bx bxs-user'><span className="span_font">Acerca de mi</span></i></li></Link>
    </div> 
  <div className="box__menu">
    <Link to="/portfolio" onClick={updateMenu} ><li><i className='bx bxs-briefcase'><span className="span_font">Portafolio</span></i></li></Link>
   
  </div>
 <div className="box__menu"> 
  <a href="#contact" onClick={updateMenu} ><li><i className='bx bxs-contact'><span className="span_font">Contactame</span ></i></li></a></div>

   
  </ul>
</div>
      </nav>
</div>
      
  );
};

export default Navbar;