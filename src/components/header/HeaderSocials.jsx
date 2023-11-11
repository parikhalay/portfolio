import React from 'react'
import {BsLinkedin , BsGithub} from 'react-icons/bs'
import {DiGoogleDrive} from 'react-icons/di'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/parikhalay/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/parikhalay' target="_blank"><BsGithub /></a>
      <a href='https://drive.google.com/drive/folders/1cEgJk7n5vxdp1aAZD6fCj44Nx8wu2yX5?usp=share_link' target="_blank"><DiGoogleDrive /></a>
    </div>
  )
}

export default HeaderSocials
