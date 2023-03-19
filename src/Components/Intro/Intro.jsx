/* This component contains the header section of your portfolio, including your name or logo, navigation links, and any other relevant information */
import "./Intro.css";
import Buttons from "./Buttons"
import Socials from "./Socials"
import pic from '../../Fonts&Images/pic3.svg';


const Intro = () => {

  return ( 
      <header>
        <div className="header__container">
  <h1 className="title"> Hi, I'm  <span className="name">  Marwa </span>
       <br/>
       Junior Full-Stack Developer
      </h1>
          <Buttons />
     
          <div className="profilePic">
            <img src={pic} alt="me" />
          </div>
          
          <a href="#contact" className="scroll_down"> Scroll Down</a> 

          <Socials />
        </div>
      </header> 
        
  );
} 

export default Intro;

