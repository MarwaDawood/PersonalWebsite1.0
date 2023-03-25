/*  This component contains a section showcasing your projects, including images, descriptions, and links to the live projects or source code */

import React from 'react';
import './Projects.css';
import project1 from '../../Fonts&Images/project1.png';
import project2 from '../../Fonts&Images/project2.png';
import comingsoon from '../../Fonts&Images/comingsoon1.aep'


const data = [
  {

  id: 1,
  image: project1,
  title: 'Home Grown',
  github: 'https://github.com/MarwaDawood/bc13_final-project_front-end-maccaw.git',
  demo: 'https://home-grown.vercel.app/'

},
{
  id: 2,
  image: project2,
  title: 'Project Match',
  github: 'https://github.com/MarwaDawood/week-nine-front-end-project',
  demo: 'https://project-match.netlify.app/'
},
{
  id: 3,
  image: comingsoon,
  title: 'Coming Soon',
  github: 'https://github.com/MarwaDawood',
  demo: '#'
},
{
  id: 4,
  image: comingsoon,
  title: 'Coming Soon',
  github: 'https://github.com/MarwaDawood',
  demo: '#'
},






]








const Project = () => {
  return (
    <section id='projects'>

       <h5 className='title3'> Projects </h5>

   <div className='project_container'>
{
  data.map(({id, image, title, github, demo}) => {
    return (
       

     <article key={id}className='project_item'> 
      <div className='project_img'> <img src={image} alt={title} className='projectImg1' /> 
      </div> 
      <h3 className='project_title'> {title} </h3>
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
