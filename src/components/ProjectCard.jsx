import React from "react";

const ProjectCard = ({title, role, stack, achievements, image, github}) => {
    
    const onClick = () => {
        if (github) {
            window.open(github, '_blank');
        }
    }
    return (
        <div className="project-card" onClick={onClick}>
            <h3 className="project-title">{title}</h3>
            <img src={image} alt=""  className="img"/>
            <p> <strong>Роль:</strong> {role}</p>
            <p> <strong>Стек:</strong> {stack}</p>
            <p> <strong>Достижения:</strong> {achievements}</p>
        </div>
    );
};
export default ProjectCard;