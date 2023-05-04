/* This component contains a more detailed description of yourself, including your education, work experience, and any other relevant information */

import React from 'react';
import pic from '../../Fonts&Images/pic3.svg';
import './About.css';
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiExpress, SiGithub, SiPostgresql, SiMysql, SiJest, SiCypress, SiFigma, SiPostman, SiNextdotjs, SiTrello} from 'react-icons/si';
import {DiNodejs} from 'react-icons/di';
import gtkm from '../../Fonts&Images/gtkm.png'
import ts from '../../Fonts&Images/ts.png'


const About = () => {
  return (
    <section id="about">
  
    <div className="profilePic">
        <img src={pic} alt="me"/>
      </div>


      <div className="about_container"> 
          
      <img src={gtkm} alt='gtkm' className='gtkm' />

     

      <div className="about_me">

        
     

      <p> As a highly motivated and detail-oriented junior full-stack developer, I am dedicated to creating innovative solutions that drive business success. With five years of experience in retail and people management, I thrive in high-pressure environments and am committed to delivering exceptional results.  
<br />
      Out of more than 1000 applicants, I was selected to participate in the School of Code's intensive 16-week full-stack software development bootcamp. During the program, I gained valuable hands-on experience in front-end development using HTML, CSS, JavaScript, and React. Additionally, I gained proficiency in back-end development with technologies like Node and Express. Through the bootcamp, I learned to work with RESTful APIs and gained practical experience in storing and retrieving data from databases. Furthermore, I gained familiarity with testing and used tools such as Jest and Cypress to ensure the quality of my code. 
<br />

    In addition to that, I have further developed my communication skills by participating in various discussions with team members on various platforms, and by collaborating with larger groups on projects. I have also honed my problem-solving abilities by breaking down complex code and devising effective solutions, and have refined my presentation skills through weekly hackathons where I had the opportunity to present my work.
<br />
  I am now eager to apply my skills and knowledge in a dynamic tech role, and have continued my learning by completing the highly acclaimed Harvard CS50X course and The Complete Web Developer: Zero to Mastery course on Udemy. 
      </p>

    </div>   
 </div> 

 <img src={ts} alt='gtkm' className='ts' />

<div className='techStack'> 


  <div className='gridItem'> <SiHtml5 size='6em' color='e34c26' />  </div>
  <div className='gridItem'> <SiCss3 size='6em' color='264de4' /> </div>
  <div className='gridItem'> <SiJavascript size='6em' color='FFD600'/> </div>
  <div className='gridItem'> <SiReact size='6em' color='61DBFB'/> </div>
  <div className='gridItem'> <DiNodejs size='6em' color='6cc24a'/> </div>
  <div className='gridItem'> <SiExpress size='6em' color='34313'/> </div>
  <div className='gridItem'> <SiGithub size='6em' color='171515'/> </div>
  <div className='gridItem'> <SiPostgresql size='6em' color='336791'/> </div>
  <div className='gridItem'> <SiMysql size='6em' color='00758F'/> </div>
  <div className='gridItem'> <SiJest size='6em' color='#A52A2A'/> </div>
 <div className='gridItem'> <SiCypress size='6em' color='#2F4F4F'/> </div>
  <div className='gridItem'> <SiFigma size='6em' color='black'/> </div>
 <div className='gridItem'> <SiPostman size='6em' color='EF5B25'/> </div>
 <div className='gridItem'> <SiNextdotjs size='6em' color='black'/> </div>
 <div className='gridItem'> <SiTrello size='6em' color='007AC0'/> </div> 


</div>
      
   
    
    </section>
  )
}

export default About;
