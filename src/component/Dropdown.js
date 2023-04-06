import React from 'react'
import '../css/NavBar.css'
import MenuItems from './MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : "top"}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;