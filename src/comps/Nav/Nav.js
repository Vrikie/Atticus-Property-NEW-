import React, { useState } from "react";
import { NavItems } from "./NavItems";

function Nav() {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <nav className={nav ? "Nav active" : "Nav"}>
        <div className="navbar-logo">
          <a href="/">
            <img
              src="./img/textlogo.png"
              className="logo"
              alt="Atticus Property"
              width="auto"
              height="50px"
            />
          </a>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NavItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a className={item.cName} id={item.type} href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
