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
            <p> Engineered responsive React components using Javascript, Redux for state management, and Tailwind CSS,
            implementing real-time AI chat interactions that reduced bounce rate by 25% across all device types.</p>
            </li>

            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Constructed microservices using Java Spring Boot and REST APIs, leveraging AWS Lambda and API Gateway for
            serverless computing which improved transaction processing speed by 15%.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Enforced comprehensive testing strategy using Jest and JUnit with Mockito for backend services, surpassing more than
            100 test cases and reducing production bugs while establishing automated CI/CD pipelines.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Incorporated complex SQL queries and stored procedures for data analytics and reporting, optimizing query performance
            and achieving 15% reduction in report generation time across business intelligence dashboards.</p>
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
            <p>Spearheaded the development of an interactive school website using React, React Router and Express.js which amplified
            user engagement by 12% through an interactive UI using Material UI (MUI).</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25} />
            <p>Developed and implemented authentication and validation mechanisms using OAuth 2.0, resulting in a 10% decrease in
            unauthorized access incidents and strengthened overall system security.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={15}/>
            <p>Implemented MongoDB for efficient data management, improving retrieval speeds and optimizing storage.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25}/>
            <p>Integrated GitHub for version control, facilitating collaborative development, while GitLab CI/CD integration
            streamlined deployment processes, reducing deployment time by 10% which elevated team productivity.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='experience'>
          <div className='experience__head'>
            <h3>Front End Developer Intern : June 2022 – July 2022</h3>
            <h5>Infolabz Pvt. Ltd. (Ahmedabad, India)</h5>
          </div>

          <ul className='experience__list'>
            <li>
            <AiFillCaretRight className='experience__list-icon'  size={25}/>
            <p> Contributed to a scalable sports news platform utilizing React.js, Redux, and Axios for RESTful API integration,
            implementing responsive Material-UI components and PWA features, resulting in 2x user engagement.</p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25}/>
            <p>Collaborated with a team of 5 developers to integrate third-party APIs, improving data synchronization and overall
            performance while ensuring effective communication through Jira.

            </p>
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
            <AiFillCaretRight className='experience__list-icon ' size={25}/>
            <p> Implemented coding knowledge in design projects, resulting in highly efficient and technically optimized visual content,
                positively impacting project scalability and performance </p>
            </li>
            <li>
            <AiFillCaretRight className='experience__list-icon' size={25}/>
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
