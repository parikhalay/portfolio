import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram,BsGithub,BsWhatsapp} from 'react-icons/bs'
// import {AiOutlineLinkedin} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q7bns6d', 'template_co25uzp', form.current, '4MKmiyDypxxxYdww9')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>parikh.alay58@gmail.com</h5>
            <a href='mailto:parikh.alay58@gmail.com' target="_blank">Send an email</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Have a query?</h5>
            <a href='https://api.whatsapp.com/send?phone=4387798470' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Repositories</h5>
            <a href='https://github.com/parikhalay' target='_blank'>Check profile</a>
          </article>
          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' placeholder='Your Full Name' required />
          <input type='email' name='user_email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact