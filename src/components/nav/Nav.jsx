import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage2} from 'react-icons/tb';
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { useState } from 'react'

const Nav = () => {

  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
      {/* <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav=== '#about' ? 'active' : ''} title="About Me"><AiOutlineUser /></a> */}
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav=== '#skills' ? 'active' : ''} title="Skills"><BiBookOpen /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active' : ''} title="Experience"><RiServiceLine /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav=== '#projects' ? 'active' : ''} title="Projects"><AiOutlineProject /></a>
      <a href='#graphic_design' onClick={() => setActiveNav('#graphic_design')} className={activeNav=== '#graphic_design' ? 'active' : ''} title="Designs"><MdOutlineDesignServices /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active' : ''} title="Contact Me"><TbMessage2 /></a>
    </nav>
  )
}

export default Nav
