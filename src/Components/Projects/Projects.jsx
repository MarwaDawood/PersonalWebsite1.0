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
  description: 'For our end of bootcamp project, our team at the School of Code bootcamp sought to address real-world issues that interconnect and impact society. After brainstorming and discussions, we identified significant problems such as climate change, high cost of living, and lack of community. Consequently, we developed Home-Grown, an application to empower individuals to take steps towards a more sustainable, self-sufficient, and community-oriented future. While acknowledging that our app may not solve these complex issues, it aims to offer guidance and resources to individuals looking to make a positive impact in their communities.',
  github: 'https://github.com/MarwaDawood/bc13_final-project_front-end-maccaw.git',
  demo: 'https://home-grown.vercel.app/'

},
{
  id: 2,
  image: project2,
  title: 'Project Match',
  description: 'For our mini project week, our task was to develop an application that could improve the experience or resolve a challenge faced by a coding bootcamp attendee. Based on our discussions and the creation of user personas, we identified a common challenge encountered by most attendees - feeling overwhelmed when working on projects independently, especially as new entrants to the tech industry. As a solution, we conceptualized a social platform that fosters collaboration and networking among peers, providing an avenue for them to work on projects together.',
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
  data.map(({id, image, title, description, github, demo}) => {
    return (
       

     <article key={id}className='project_item'> 
      <div className='project_img'> <img src={image} alt={title} className='projectImg1' /> 
      </div> 
      <h3 className='project_title'> {title} </h3>
      <p> {description} </p>
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