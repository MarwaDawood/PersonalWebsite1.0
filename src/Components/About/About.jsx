/* This component contains a more detailed description of yourself, including your education, work experience, and any other relevant information */

import React from 'react';
import pic from '../../Fonts&Images/pic3.svg';
import './About.css';
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiExpress, SiGithub, SiPostgresql, SiMysql, SiJest, SiCypress, SiFigma, SiPostman, SiNextdotjs, SiTrello} from 'react-icons/si';
import {DiNodejs} from 'react-icons/di';


const About = () => {
  return (
    <section id="about">
  
    <div className="profilePic">
        <img src={pic} alt="me"/>
      </div>


      <div className="about_container"> 
          
      <h2 className='title1'> Get to know me </h2>



      <div className="about_me">

        
     

      <p> I am a highly dedicated and motivated junior full-stack software developer with a strong track record of professional and personal achievements. With four years of experience in retail, sales, and people management, I have developed the ability to thrive in high-pressure environments and adapt to new challenges with ease. I am committed to delivering exceptional results and consistently meeting or exceeding expectations.  
<br />
        I am actively pursuing a career in tech by completing a Software Development Bootcamp at The School of Code. Through this program, I have gained a strong foundation in a range of technical skills, including HTML, CSS, JavaScript, React.js, GitHub, SQL, UI/UX, Node.js, Express.js, Next.js and TypeScript. These skills have allowed me to build and maintain a wide range of web applications and other software products.
<br />

    In addition to that, I have further developed my communication skills by participating in various discussions with team members on various platforms, and by collaborating with larger groups on projects. I have also honed my problem-solving abilities by breaking down complex code and devising effective solutions, and have refined my presentation skills through weekly hackathons where I had the opportunity to present my work.
      </p>

    </div>   
 </div> 

<h2 className='title2'> Tech Stack </h2>

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
