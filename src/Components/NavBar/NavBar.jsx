/* This component contains an introduction to your portfolio and yourself, including a brief summary of your skills and experience */
import "./NavBar.css";
import logo3 from '../../Fonts&Images/logo3.png'


/*
function reloadPage () {

  window.location.reload()
}
onClick={() => reloadPage()}
*/


const NavBar = () => {
  return (
     <nav className="navBar"> 

  


    <a href='#'> <img src={logo3} alt="logo" className="logo3"/> </a> 
    
   
           <ul>
            
              <li><a href="#about"> About Me </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#contact"> Contact Me </a></li>
           </ul>
  </nav>


 
  )
}

export default NavBar;


