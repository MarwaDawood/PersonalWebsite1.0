import React from 'react';

import CV from '../../Fonts&Images/CV.pdf';

const Buttons = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn1"> Download CV </a>
        <a href="#contact" className="btn2"> Contact me! </a>
      
    </div>
  )
}

export default Buttons
  