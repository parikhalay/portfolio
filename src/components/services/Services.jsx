import React from 'react'
import './services.css'
import {AiFillCaretRight} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I have done</h5>
      <h2>Internship Experience</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Full Stack Developer : Jan 2023 – April 2023</h3>
            <h5>Tech Elecon Pvt. Ltd.</h5>
          </div>

          <ul className='service__list'>
            <li>
            <AiFillCaretRight className='service__list-icon' size={25} />
            <p>Orchestrated a team to revolutionize a client’s web platform, 
            culminating in a 40% upsurge in mobile traffic and fortified
            search engine rankings.</p>
            </li>
            <li>
            <AiFillCaretRight className='service__list-icon' size={23} />
            <p>Engaged in stakeholder collaboration to delineate
             project requisites and guarantee alignment with objectives.</p>
            </li>
            <li>
            <AiFillCaretRight className='service__list-icon' size={40}/>
            <p>Spearheaded the successful implementation of React, seamlessly translating design concepts into highly maintainable
            code, resulting in an exceptional User Experience (UX) and reducing frontend development time by 40%.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Application Developer : June 2022 – July 2022</h3>
            <h5>Infolabz Pvt. Ltd.</h5>
          </div>

          <ul className='service__list'>
            <li>
            <AiFillCaretRight className='service__list-icon'  size={20}/>
            <p>Engineered a comprehensive sports news web interface offering the latest updates, upcoming events, and results.</p>
            </li>
            <li>
            <AiFillCaretRight className='service__list-icon' size={30}/>
            <p>Orchestrated seamless integration of requisite APIs within the team, meeting project criteria; achieved a 40% reduction
            in manual data entry and saved 20+ hours per week.
            </p>
            </li>
            <li>
            <AiFillCaretRight className='service__list-icon' size={20}/>
            <p>Worked with different APIs to request for data and displayed by programming a webpage to give valuable information.</p>
            </li>
            
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Graphic Designer : Nov 2022 – July 2023</h3>
            <h5>Adare Food Ingredients Pvt. Ltd.</h5>
          </div>

          <ul className='service__list'>
            <li>
            <AiFillCaretRight className='service__list-icon ' size={30}/>
            <p> Implemented coding knowledge in design projects, resulting in highly efficient and technically optimized visual content,
                positively impacting project scalability and performance </p>
            </li>
            <li>
            <AiFillCaretRight className='service__list-icon' size={35}/>
            <p>Led the redesign of multiple digital interfaces, implementing responsive design techniques based on computer science
                principles, resulting in a 30% increase in user engagement and enhanced user experience.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF GRAPHIC DESIGNER */}
      </div>
    </section>
  )
}

export default Services
