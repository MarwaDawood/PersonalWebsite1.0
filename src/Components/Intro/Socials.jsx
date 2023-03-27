import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {TfiEmail} from 'react-icons/tfi';

const Socials = () => { 
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/marwa-dawood/" target="_blank" rel="noreferrer"> <BsLinkedin size='1.5rem'/> </a>
        <a href="https://github.com/MarwaDawood" target="_blank" rel="noreferrer"> <BsGithub size='1.5rem'  /> </a>
         <a href="mailto:marwa.dawood@hotmail.com" target="_blank" rel="noreferrer"> <TfiEmail size='1.5rem' /> </a>
        
      
    </div>
  )
}

export default Socials
