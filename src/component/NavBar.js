import React, {useEffect, useState} from 'react'
import '../css/NavBar.css'
import { navBarItems } from './navBarItems';
import MenuItems from './MenuItems';

export default function NavBar() {
    const[className, setClassName]=useState("alt");
    const[toggleNavBar, setToggleNavBar]=useState(false);
    const[classNames, setClassNames]=useState("menuToggle");
	
	function toggleNavBarVisiblity() {
        const currentScrollPos = window.scrollY;
        const maxScroll = document.getElementById('header').getBoundingClientRect().height;
        currentScrollPos >= maxScroll ? setClassName("base") : setClassName("alt");
	}

	useEffect(() => {
        if(toggleNavBar === false) {
            window.addEventListener('scroll', toggleNavBarVisiblity, { passive: true });
        
            return () => {
                window.removeEventListener('scroll', toggleNavBarVisiblity);
            };
        } else {
            setClassName("base")
        }
	}, [toggleNavBar]);

    function viewNavBar() {
        setToggleNavBar(!toggleNavBar);
        if(toggleNavBar === true) {
            setClassNames("menuToggle selected")
            toggleNavBarVisiblity()
        } else {
            setClassNames("menuToggle")
        }
    }
    
  return (
    <div>
        <header id="header2" className={className}>
            <nav id="nav"> 
                <h1><a href="/">Orison</a></h1>
                <div id="menus" className={className}>
                    <ul>
                        {navBarItems.map((menu, index) => {
                            const depthLevel = 0;
                            return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
                        })}
                    </ul>
                </div>
                <div id="toggleNavButton">
                    <ul>
                        <li className="special">
                            <button className={classNames} onClick={viewNavBar} style={{backgroundColor: toggleNavBar===true? 'rgba(255, 255, 255, 0.2)':'inherit'}}>
                                <img src="../../assets/css/images/bars.svg" alt="menu" className="bars"></img>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}
