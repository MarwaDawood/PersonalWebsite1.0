/* This component contains the header section of your portfolio, including your name or logo, navigation links, and any other relevant information */
import "./Intro.css";
import Buttons from "./Buttons"
import Socials from "./Socials"



const Intro = () => {

  return (
    <section id='intro'> 
      <header>
        <div className="header_container">
  
          <h1 className="title"> Hi, I'm  <span className="name">  Marwa </span>
          <br/>
           Junior Full-Stack Developer
          </h1>

          <Buttons />
     
          
          
          <a href="#contact" className="scroll_down"> Scroll Down </a> 

         
         <Socials />
        </div>
      </header> 
      </section>

        
  );
} 

export default Intro;

