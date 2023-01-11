import React from 'react';
import { useState } from 'react';
import NavButtonContents from './NavButtonContents';
import { GiHamburgerMenu } from "react-icons/gi";
import Bartending from './Bartending';
const BarNav = ({toggle, toggleBartending, i}) => {



      const [barToggle, setBarToggle] = useState(true)
      const [buttonState, setButtonState] = useState(false)
    const [navButton, setNavButton] = useState(toggle)

        const setNavButtonSomething = (i) => {
        setNavButton(i)
      }
    const HandleNavButton = (i) => {
        setNavButton(i)
             setButtonState(false);  


    }              
    return (
        <div className={navButton ? "BarNavOuterOpen" : 'BarNavOuterClosed'}>
            <div className={!navButton ? 'ClosedNavButton1' : "OpenNavButton1"}><div style={{position: 'fixed', top: "2vmin", fontSize: "25px", right:"2vmin", width:"50px", height: "50px", display: "flex",
        alignItems: "center", justifyContent: "center"}}onClick={()=> HandleNavButton}><GiHamburgerMenu/></div></div>
<div className={navButton ? 'ClosedNavButton' : "OpenNavButton"}><NavButtonContents toggleBartending={toggleBartending} 
ChangeNavButton = {setNavButtonSomething}
HandleNavButton={HandleNavButton} buttonState= {buttonState}/></div>
{barToggle && <Bartending/>}
        </div>
    );
};

export default BarNav;