import React from 'react'
import './about.css'
import ME from '../../assests/about-image.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years in Internships & Projects</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Internships</h5>
              <small>3 Internships</small>
            </article>
            <article className='about__card'>
              <BsFolder2Open className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p className='about__text'>I am in last year of my B.E. in Computer Engineering. 
          I have been learning and doing projects & designs since more than a year.
          Also, I am open to new projects in which I can showcase my skillset and give the best quality required. </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about