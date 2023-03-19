/* This component contains an introduction to your portfolio and yourself, including a brief summary of your skills and experience */
import "./NavBar.css";
import logo1 from '../../Fonts&Images/logo1.png'



function reloadPage () {

  window.location.reload()
}



const NavBar = () => {
  return (
    <div> 


     <nav>
           <ul>
              <li><a href="#about"> About Me </a></li>
              <li><a href="#projects"> Projects </a></li>
              <li><a href="#contact"> Contact Me </a></li>
           </ul>
  </nav>
</div>
 
  )
}

export default NavBar;


