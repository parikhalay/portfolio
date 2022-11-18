import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'>Alay Parikh</a>


    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href='https://www.linkedin.com/in/alay-parikh-a97047207/'><AiOutlineLinkedin /></a>
      <a href='https://www.instagram.com/alay_parikh/'><BsInstagram /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Alay Parikh. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
