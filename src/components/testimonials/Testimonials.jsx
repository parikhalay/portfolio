import React, {Component} from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/graphic/img-1.png'
import AVTR2 from '../../assests/graphic/img-2.jpg'
import AVTR3 from '../../assests/graphic/img-3.png'
import AVTR4 from '../../assests/graphic/img-4.png'
import AVTR5 from '../../assests/graphic/img-5.jpg'
import AVTR6 from '../../assests/graphic/img-6.png'
import AVTR7 from '../../assests/graphic/img-7.jpg'
import AVTR8 from '../../assests/graphic/img-8.jpg'
import AVTR9 from '../../assests/graphic/img-9.jpg'
import AVTR10 from '../../assests/graphic/img-6.png'


// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name: 'Shoes Offer',
    review: 'Check out this cool new sneakers'
  },
  {
    avatar:AVTR2,
    name: 'AD design',
    review: 'Burger Advertisement for restaurants'
  },
  {
    avatar:AVTR3,
    name: 'Watch Advertisement Design',
    review: 'Check out this new watch '
  },
  {
    avatar:AVTR4,
    name: 'Event Management Flyer',
    review: 'Contact for any event plannings'
  },
  {
    avatar:AVTR5,
    name: 'Social Media Post',
    review: 'Greetings everyone on this ocassion'
  },
  {
    avatar:AVTR6,
    name: 'Invitation Card',
    review: 'Welcome to the party'
  },
  {
    avatar:AVTR7,
    name: 'Social Post',
    review: 'Celebrate Festivals with sharing greetings'
  },
  {
    avatar:AVTR8,
    name: 'Logo Design',
    review: 'A logo for company'
  },
  {
    avatar:AVTR9,
    name: 'Functional Design',
    review: "A robot's technical description"
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Sample images for</h5>
      <h2>Graphic Design</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
       
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <a href={avatar} rel='noreferrer' target='_self'><img src={avatar} alt='Sample'/></a>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
