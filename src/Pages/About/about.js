import React from "react";
import "./about.css"
import selfie from "../../Images/selfie.jpeg"

function AboutPage() {
    const photo = [
        {
            title: "selfie",
            image: selfie
        },
    ];

    return (
    <section className="about-section">
        <h1>About Me</h1>
        <div className="about-selfie">
            <img src={photo[0].image} alt={photo[0].title} className='selfie'></img>
        </div>
        <h2>Software Engineer, Retail Expert</h2>
        <p className="centered">
            My name is Marie DeVoll and I am currently enrolled in a full stack web development coding course through UC Berkeley. 
            I graduated from The George Washington University in 2022 with a degree in sociology. After college, I worked fulltime 
            in retail for 2 years and decided it was time to learn something new.
        </p>
        <p className="centered">On this page, visitors can see the projects I have worked on over the last 12 weeks</p>
    </section>
);}

export default AboutPage;