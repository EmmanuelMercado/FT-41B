import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <NavLink to ='/'>
        <li>
          <img src={logoHenry} alt="logo-henry" />
        </li>
        </NavLink>
        
        <NavLink to ='/'>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        </NavLink>
        
        <div className={styleNav.options}>
            <NavLink to= '/shipping'>       
            <li>
            <span>Navieras</span>
            </li>
            </NavLink>
          <NavLink to='/discounts'>
          <li>
            <span>Promociones</span>
          </li>
          </NavLink>  
        </div>
      </ul>
    </div>
  );
}
