import React from 'react';
import './portfolio.css';
import weather from '../../Images/weather.png'

function PortfolioPage() {
    const projects = [
        {
            title: "Weather Dashboard",
            image: weather,
            deployedLink: "https://mariedevoll.github.io/module-6-challenge/",
            githubLink: "https://github.com/mariedevoll/module-6-challenge"
        }, {
            title: "Blog Post",
            image: "public/Images/blogpost.png",
            deployedLink: "https://mariedevoll.github.io/module-4-challenge/",
            githubLink: "https://github.com/mariedevoll/module-4-challenge"
        }, {
            title: "Trivia Game",
            image: "",
            deployedLink: "https://lockedjce.github.io/Group-Trivia-Website/",
            githubLink: "https://github.com/LockedJCE/Fetch-Facts"
        },
    ];

    return (
        <section className='portfolio-section'>
            <h1>My Portfolio</h1>
            <h2>Recent Projects:</h2>
            <div className='project-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <div className='image-container'>
                            <img src={project.image} alt={project.title} className='project-image'></img>
                            <div className='overlay'>
                                <div className='project-link'>
                                    <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>Deployed Link</a>
                                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>Github Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioPage;