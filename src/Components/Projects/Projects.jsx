/*  This component contains a section showcasing your projects, including images, descriptions, and links to the live projects or source code */

import React from 'react';
import './Projects.css';
import project1 from '../../Fonts&Images/project1.png';
import project2 from '../../Fonts&Images/project2.png';
import pro from '../../Fonts&Images/pro.png'
// import comingsoon from '../../Fonts&Images/comingsoon.png'


const data = [
  {

  id: 1,
  image: project1,
  title: 'Home Grown',
  description: 'For our final 4-week scrum project in a team of 6 for the School of Code bootcamp, we were tasked with creating an application that would address a current real-life problem. Our team chose to tackle the issues of high cost of living and lack of community cohesion. Our solution was to create an application that allows users to share their unused green space for growing food, thus promoting sustainable farming practices in urban areas. In addition, our app allows users to search for nearby green spaces where they can volunteer their time and contribute to local farming efforts. To enhance the user experience, our application also includes a blog that provides valuable insights, tips, and information related to urban agriculture.',
  techStack: 'Next.js - Firebase - CSS - Cypress - Jest - Render - Vercel - Express.js - Node.js - PostgreSQL',
  github: 'https://github.com/MarwaDawood/bc13_final-project_front-end-maccaw.git',
  demo: 'https://home-grown.vercel.app/'

},
{
  id: 2,
  image: project2,
  title: 'Project Match',
  description: 'For our mini 1-week project at the School Of Code bootcamp, we were tasked with developing an application that could improve the experience or resolve a challenge faced by a coding bootcamp attendee. Based on our discussions and the creation of user personas, we identified a common challenge encountered by most attendees - feeling overwhelmed when working on projects independently, especially as new entrants to the tech industry. As a solution, we conceptualized a social platform that fosters collaboration and networking among peers, providing an avenue for them to work on projects together.',
  techStack: 'React.js - CSS - Express.js - Node.js - PostgreSQL - Netlify',
  github: 'https://github.com/MarwaDawood/week-nine-front-end-project',
  demo: 'https://project-match.netlify.app/'
},

];


const Project = () => {
  return (
    <section id='projects'>

         <img src={pro} alt='gtkm' className='p' />

   <div className='project_container'>
{
  data.map(({id, image, title, description, techStack, github, demo}) => {
    return (
       

     <article key={id}className='project_item'> 
      <div className='project_img'> <img src={image} alt={title} className='projectImg1' /> 
      </div> 
      <h3 className='project_title'> {title} </h3>

      <p> {description} </p>
       

     <p className='techStack1'>  <span className='techstacktitle'> Tech Stack: </span> {techStack}  </p>



     <div className='project_links'> 
        <a href={github} className='button' target="_blank" rel="noreferrer"> Source Code </a>
       <a href={demo} target="_blank" rel="noreferrer" className='button'> See Live </a>
       </div>
     </article>
    )
  })
}

     </div>
    </section>
  )
}

export default Project

/*
{
  id: 3,
  image: comingsoon,
  title: 'Coming Soon',
  description: '',
  github: 'https://github.com/MarwaDawood',
  demo: '#'
},
{
  id: 4,
  image: comingsoon,
  title: 'Coming Soon',
  description: '',
  github: 'https://github.com/MarwaDawood',
  demo: '#'
}
*/