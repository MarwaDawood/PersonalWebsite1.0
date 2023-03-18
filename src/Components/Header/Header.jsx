/* This component contains the header section of your portfolio, including your name or logo, navigation links, and any other relevant information */
import "./Header.css";
import banner from "../../Fonts&Images/banner.png"



function reloadPage () {

  window.location.reload()
}


const Header = () => {

  return (
    <div className="header">
      
<img className="banner" onClick={() => reloadPage()}
src={banner} alt="banner"/> 


    <nav className="navBar">
      <ul>
        <li> <a href="#about"> About Me </a></li>
        <li> <a href="#projects"> Projects </a></li>
        <li> <a href="#contact"> Contact Me </a></li>
      
      </ul>
      
    </nav>
      </div>
  );
}

export default Header;

