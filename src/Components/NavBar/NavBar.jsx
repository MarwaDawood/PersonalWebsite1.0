import "./NavBar.css";
import logo3 from '../../Fonts&Images/logo4.png'



/*
function reloadPage () {

  window.location.reload()
}
onClick={() => reloadPage()}
*/


const NavBar = () => {
  return (
     <nav className="navBar"> 

  


    <a href="#home"> <img src={logo3} alt="logo" className="logo3"/> </a> 
    
   
           <ul>
            
              <li><a href="#about"> About Me </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#contact"> Contact Me </a></li>
           </ul>
  </nav>


 
  )
}

export default NavBar;


