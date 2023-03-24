import React from 'react';

import CV from '../../Fonts&Images/CV.pdf';

const Buttons = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn1" target="_blank" rel="noreferrer"> View CV </a>
        <a href="#contact" className="btn2"> Contact me! </a>
      
    </div>
  )
}

export default Buttons
  