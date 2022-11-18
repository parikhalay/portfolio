import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Front End Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Web Page Designs</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Usage of ReactJs, JavaScript and frameworks </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Top Quality Adobe XD designs </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Very Low Prices</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Unlimited Reviews </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Easy Sharing </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Video Editing</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Adobe Premier Pro</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>High Quality videos.</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Youtube Videos</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>At a very low cost </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> Unlimited Editings </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> As per your Deadline </p>
            </li>
            
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Graphic Designing</h3>
          </div>

          <ul className='service__list'>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> All types of Designs </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon service__list-icon1' />
            <p>Newsletters, Advertisement,Social Media posts, Invitation Card, Youtube Thumbnails, etc </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon service__list-icon2' />
            <p>Adobe Photoshop, Adobe Illustrator, Canva</p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p>Unlimited Reviews </p>
            </li>
            <li>
            <AiOutlineCheckCircle className='service__list-icon' />
            <p> Affordable rates </p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHIC DESIGNER */}
      </div>
    </section>
  )
}

export default Services
