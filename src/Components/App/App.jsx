import "./App.css";
import Header from "../Header/Header"
import Intro from "../Intro/Intro";
import About from "../About/About";
import Projects from "../Projects/Project";
import Contact from "../Contact/Contact";





function App() {
  return (
    <div className="app">

      <Header />

      <Intro />
      
      <About />
      <Projects />
      <Contact />
        
    
    
    </div>
  );
}

export default App;
