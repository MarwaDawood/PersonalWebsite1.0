/* This component contains a contact form or other means of getting in touch with you, such as your email address or social media links */

import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import git from "../../Fonts&Images/git.png"


const Contact = () =>  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1pstezs', 'template_1hn5vnf', form.current, '_cVx4hljrTYjqZuMH')

    e.target.reset()
    
  };

  

  return (
    <section id='contact'>
      
          <img src={git} alt='git' className='git' />
      <div className='contact_container'>
        
        <form ref={form} onSubmit={sendEmail }> 
        
        <input type='text' name='name' placeholder='Your Full Name' required /> 
        
        <input type='email' name='email' placeholder='Your Email' required />

        <textarea name='message' placeholder='Your Message' rows='7' required></textarea>

        <button type='submit' className='submitButton'> Send Message </button>
        
        </form>
          
           </div>
    </section>
  )
}

export default Contact;
