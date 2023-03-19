/* This component contains the header section of your portfolio, including your name or logo, navigation links, and any other relevant information */
import "./Header.css";
import Buttons from "./Buttons"
import Socials from "./Socials"
import pic from '../../Fonts&Images/pic1.png';


const Header = () => {

  return ( 
      <header>
        <div className="header__container">
          <h5> Hi I'm </h5>
          <h1> Marwa Dawood </h1>
          <h5 className="text-light"> Junior Full-Stack Developer </h5>
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

export default Header;


/*
 <nav className="navBar">

    
        <img className="logo1" onClick={() => reloadPage()}
        src={logo1} alt="logo1"/> 
      
        

           <ul>
              <li><a href="#about"> About Me </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#contact"> Contact Me </a></li>
           </ul>
        </nav>
*/

/* 

function reloadPage () {

  window.location.reload()
}

*/