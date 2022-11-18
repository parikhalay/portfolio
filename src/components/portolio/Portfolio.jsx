import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/simon.png'
import IMG2 from '../../assests/dice.png'
import IMG3 from '../../assests/drum.png'
import IMG4 from '../../assests/todo.gif'
import IMG5 from '../../assests/tin.gif'

const data = [
  {
    id:1,
    image: IMG1,
    title:'Simon Game',
    github:'https://github.com/parikhalay/simongame',
    demo:'https://dribble.com'
  },
  {
    id:2,
    image: IMG2,
    title:'Dice Game',
    github:'https://github.com/parikhalay/dicegame',
    demo:'https://dribble.com'
  },
  {
    id:3,
    image: IMG3,
    title:'Drum kit',
    github:'https://github.com/parikhalay/Drumkit',
    demo:'https://dribble.com'
  },
  {
    id:4,
    image: IMG4,
    title:'To-do list',
    github:'https://github.com/parikhalay/Todo-list',
    demo:'https://dribble.com'
  },
  {
    id:5,
    image: IMG5,
    title:'Tin Dog',
    github:'https://github.com/parikhalay/Dogsite',
    demo:'https://dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
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

export default Portfolio
