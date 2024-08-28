import React from 'react';
import portfolioData from '../components/data';

const Projects = () => {
    return (
        <div>
            <h3>Projects</h3>
            <div className="row">
                {portfolioData.map((project, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                {/* <img src={project.image} alt={project.name} className="card-img-top" /> */}
                                <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.name} className="card-img-top" />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title text-muted">{project.name}</h5>
                                <p className="card-text text-muted">{project.description}</p>
                                <p className="card-text text-muted">
                                    <p className="card-text " style={{ color: '#9ba9bf' }}>{project.used}</p>
                                    <small className="text-muted">Added: {project.added}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;