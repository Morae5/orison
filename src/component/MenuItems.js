import React, { useState, useEffect, useRef } from 'react'
import '../css/NavBar.css'
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

       const navigate = useNavigate();
       const handleClick = (url) => {
        if(url.trim !== "") {
          navigate(url);
        }
       }

    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {items.submenu ? (
          <>
            <button type="button" className={depthLevel > 0 ? "sub" : "top"}
                aria-haspopup="menu" 
                aria-expanded={dropdown ? "true" : "false"} 
                onClick={() => handleClick(items.url)}>
              {items.title}{' '}
              {depthLevel > 0 ? <span>&nbsp;&rsaquo;</span> : <span className="arrow" />}
            </button>
            <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
          </>
        ) : (
          <button className="top" onClick={() => handleClick(items.url)}>{items.title}</button>
        )}
      </li>
    );
};

export default MenuItems;