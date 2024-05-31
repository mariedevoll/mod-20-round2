import React from 'react';

function PortfolioPage() {
    const projects = [
        {
            title: "",
            image: "",
            deplayedLink: "",
            githubLink: ""
        }, {
            title: "",
            image: "",
            deplayedLink: "",
            githubLink: ""
        }, {
            title: "",
            image: "",
            deplayedLink: "",
            githubLink: ""
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
                                    <a href={project.deplayedLink} target='_blank' rel='noopener noreferrer'>Deployed Link</a>
                                    <a href={project.githubLinkLink} target='_blank' rel='noopener noreferrer'>Github Link</a>
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