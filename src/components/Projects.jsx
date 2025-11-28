import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: '#',
            role: '#',
            stack: '#',
            achievements: '#'
        },
        {
            title: '#',
            role: '#',
            stack: '#',
            achievements: '#'
        },
        {
            title: '#',
            role: '#',
            stack: '#',
            achievements: '#'
        }
    ];

    return (
        <section className="section">
            <h2 className="section-title">Мои проекты</h2>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};
export default Projects; 