import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {TfiEmail} from 'react-icons/tfi';

const Socials = () => { 
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/marwa-dawood/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/MarwaDawood" target="_blank" rel="noreferrer"> <BsGithub /> </a>
         <a href="mailto:marwa.dawood@hotmail.com" target="_blank" rel="noreferrer"> <TfiEmail /> </a>
        
      
    </div>
  )
}

export default Socials
