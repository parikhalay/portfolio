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
            <h3>Software Developer : May 2024 – August 2024</h3>
            <h5>Iminoimi Technology Inc. (Montreal, Canada)</h5>
          </div>

          <ul className='experience__list'>

            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p> Spearheaded the continuous maintenance and upgrades of existing web applications in React; improved overall system
            stability and user interface, leading to a 20% decrease in reported technical issues from users.</p>
            </li>

            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Managed the API life cycle with Node.js, optimizing and integrating 5+ endpoints, which reduced data communication
            latency by 8% and improved system efficiency.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Conducted research on 6+ models and integration techniques using Python, leading to a 11% enhancement in application
            functionality and performance.</p>
            </li>
          </ul>
        </article>
        
        
        <article className='experience'>
          <div className='experience__head'>
            <h3>Full Stack Developer : Jan 2023 – April 2023</h3>
            <h5>Tech Elecon Pvt. Ltd. (Anand, India)</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Orchestrated a team to revolutionize a client’s web platform, culminating in a 7% upsurge in mobile traffic and fortified
            search engine rankings with React.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={23} />
            <p>Developed and integrated API with Node.js, enhancing data retrieval and backend operations, reducing latency by 5%.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={40}/>
            <p>Managed and optimized customer data using MongoDB, boosting data retrieval efficiency and scalability, which
contributed to a 20% improvement in overall platform performance.
</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>Web Application Developer : June 2022 – July 2022</h3>
            <h5>Infolabz Pvt. Ltd. (Ahmedabad, India)</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon'  size={20}/>
            <p> Programmed a sports news web interface with JavaScript, delivering real-time updates, which increased user engagement by 15%.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={30}/>
            <p>Implemented seamless integration of requisite API within the team, meeting project criteria; achieved a 11% reduction in
manual data entry and saved 10+ hours per week.

            </p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={20}/>
            <p>Utilized React and JavaScript programming to collaborate with various APIs, improving data display efficiency and
            reducing load times by 20%.</p>
            </li>
            
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>Graphic Designer : Nov 2022 – July 2023</h3>
            <h5>Adare Food Ingredients Pvt. Ltd. (Anand, India)</h5>
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
