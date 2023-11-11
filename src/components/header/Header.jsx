import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/user.png'
import HeaderSocials from './HeaderSocials'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Header = () => {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Alay Parikh", "Full Stack Developer", "Software Developer", "Graphic Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there!</h5>
        {/* <h1>Alay Parikh</h1> */}
        <h1>I'm <span ref={el}></span></h1>
        <CTA />
        <HeaderSocials /> 
        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
