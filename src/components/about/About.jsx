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

          <p className='about__text'>Welcome to my portfolio highlighting my pursuit of a Master's in Applied Computer Science at Concordia University. 
          Currently immersed in a dynamic program, I've delved into advanced topics such as algorithms, data structures, and artificial intelligence, equipping myself with a robust skill set in Python, Java, C++, data science, and machine learning.
           Engaging in impactful research projects and internships has further refined my abilities, while active involvement in the university community underscores my commitment to collaboration and leadership. 
           This journey not only solidifies my academic foundation but also fuels my enthusiasm for contributing innovative solutions to the ever-evolving landscape of computer science. </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about