import React from 'react';
import './resume.css';
import smartie from "../../Images/resume.png"

function resume() { 
  const resume = [
    {
      title: "resume",
      image: smartie
    },
  ];

  return (
    <section className='portfolio-section'>
    <h2>My updated Resume:</h2>
          <div className='centered-image'>
              <img src={resume[0].image} alt={resume[0].title} className='resume-image'></img>
            </div>
    </section>
  );
}
export default resume;
