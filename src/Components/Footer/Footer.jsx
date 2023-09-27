import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {TfiEmail} from 'react-icons/tfi';
import './footer.css'
import logo3 from '../../Fonts&Images/logo4.png'

const Footer = () => {
  return (
    <footer>


       <a href='#home'> <img src={logo3} alt="logo" className="footer_logo"/> </a> 

   
     <ul className='permalinks'> 
     
     <li><a href='#home'> Home </a></li>
     <li><a href='#about'> About </a></li>
     <li><a href='#projects'> Projects </a></li>
     <li><a href='#contact'> Contact </a></li>
     </ul>

<div className='footer_socials'>
  <a href="https://www.linkedin.com/in/marwa-dawood/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
  <a href="https://github.com/MarwaDawood" target="_blank" rel="noreferrer"> <BsGithub /> </a>
  <a href="mailto:marwa.dawood@hotmail.com" target="_blank" rel="noreferrer"> <TfiEmail /> </a>


</div>

<div className='footer_copyright'>
<small>&copy; Marwa Dawood. All rights reserved. </small>

</div>

    </footer>
  )
}

export default Footer;
