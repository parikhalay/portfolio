import React from 'react'
import './experience.css'
import {AiFillCaretRight} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I have done</h5>
      <h2>Internship Experience</h2>

      <div className="container experiences__container">
      <article className='experience'>
          <div className='experience__head'>
            <h3>Software Developer : May 2024 – Present</h3>
            <h5>Iminoimi Technology Inc.</h5>
          </div>

          <ul className='experience__list'>

            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p> Implemented seamless integration of AI models with frontend technologies, utilizing React.js and RESTful APIs. Ensured real-time data processing and interactive user interfaces for enhanced user engagement.</p>
            </li>

            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Enhanced application features by integrating AI-driven functionalities, such as recommendation systems, natural language processing (NLP) for chatbots, and predictive analytics. Focused on delivering intuitive and user-friendly experiences.</p>
            </li>
          </ul>
        </article>
        
        
        <article className='experience'>
          <div className='experience__head'>
            <h3>Full Stack Developer : Jan 2023 – April 2023</h3>
            <h5>Tech Elecon Pvt. Ltd.</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Orchestrated a team to revolutionize a client’s web platform, 
            culminating in a 40% upsurge in mobile traffic and fortified
            search engine rankings.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={23} />
            <p>Engaged in stakeholder collaboration to delineate
             project requisites and guarantee alignment with objectives.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={40}/>
            <p>Spearheaded the successful implementation of React, seamlessly translating design concepts into highly maintainable
            code, resulting in an exceptional User Experience (UX) and reducing frontend development time by 40%.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>Web Application Developer : June 2022 – July 2022</h3>
            <h5>Infolabz Pvt. Ltd.</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon'  size={20}/>
            <p>Engineered a comprehensive sports news web interface offering the latest updates, upcoming events, and results.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={30}/>
            <p>Orchestrated seamless integration of requisite APIs within the team, meeting project criteria; achieved a 40% reduction
            in manual data entry and saved 20+ hours per week.
            </p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={20}/>
            <p>Worked with different APIs to request for data and displayed by programming a webpage to give valuable information.</p>
            </li>
            
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>Graphic Designer : Nov 2022 – July 2023</h3>
            <h5>Adare Food Ingredients Pvt. Ltd.</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon ' size={30}/>
            <p> Implemented coding knowledge in design projects, resulting in highly efficient and technically optimized visual content,
                positively impacting project scalability and performance </p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={35}/>
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

export default Experience;
