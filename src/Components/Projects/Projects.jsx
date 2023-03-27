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
  description: 'Our team at the School of Code bootcamp came together with the goal of addressing real-world issues that are interconnected and impact our society. Through brainstorming and discussion, we identified climate change, the cost of living, and a lack of community as significant problems. In response, we developed an app to empower individuals to take steps towards a more sustainable, self-sufficient, and community-oriented future. Though our app may not solve these complex issues, it aims to provide guidance and resources to individuals looking to make a positive impact in their communities',
  github: 'https://github.com/MarwaDawood/bc13_final-project_front-end-maccaw.git',
  demo: 'https://home-grown.vercel.app/'

},
{
  id: 2,
  image: project2,
  title: 'Project Match',
  description: 'For our project this week, we had to create an application that would enhance the experience or solve a problem a bootcamper on a coding bootcamp might face. From our discussion, which we used to create our user personas, we found the common problem that we have all found. As we are all new to the tech industry, it can be overwhelming to try work on projects independently. Our platform would be a social environment to enable people to connect and collaborate on projects together',
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