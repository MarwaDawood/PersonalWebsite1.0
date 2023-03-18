/* This component contains an introduction to your portfolio and yourself, including a brief summary of your skills and experience */
import "./Intro.css";
import pic from "../../Fonts&Images/pic1.png"

const Intro = () => {
  return (
    <div className="intro">
    <div className="pic">
<img src={pic} alt="profilePic"/>
    </div>
      <h1 className="title"> Hi, my name is  <span className="name">  Marwa </span>
       <br/>
      Junior Full-Stack Developer
      </h1>
      
      
    </div>
  )
}

export default Intro


