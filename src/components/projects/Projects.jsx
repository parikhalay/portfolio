import React from 'react'
import './projects.css'
import IMG1 from '../../assets/warzone.jpg'
import IMG2 from '../../assets/emotion.jpg'
import IMG3 from '../../assets/crypto.png'
import IMG4 from '../../assets/job.png'


const data = [
  {
    id:1,
    image: IMG1,
    title:'Strategic Territory Control Simulation Game.',
    github:'https://github.com/jenish-1990/Warzone-Game-APP-U12',
    demo:'https://dribble.com'
  },
  {
    id:2,
    image: IMG2,
    title:'Emotion Recognition Software',
    github:'https://github.com/parikhalay/Emotion-Detection',
    demo:'https://dribble.com'
  },
  {
    id:3,
    image: IMG3,
    title:'Cryptocurrency Web Application',
    github:'https://github.com/parikhalay/Cryptocurrency-Web-Application',
    demo:'https://dribble.com'
  },
  {
    id:4,
    image: IMG4,
    title:'Online Job Portal Platform',
    github:'https://github.com/parikhalay/job_portal',
    demo:'https://dribble.com'
  },
  
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
            </div>
            </article>
            )
          })
        }

        
        
      </div>
    </section>
  )
}

export default Projects
