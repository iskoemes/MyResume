import React from "react";

const ProjectCard = ({title, role, stack, achievements, image, github}) => {
    const onClick = () => {
        if (github) {
            window.open(github, '_blank');
        }
    };
    return (
        <div className="project-card" onClick={onClick}>
            <img src={image} alt="" className="img"/>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p><strong>Роль:</strong> {role}</p>
                <p><strong>Стек:</strong> {stack}</p>
                <p><strong>Достижения:</strong> {achievements}</p>
            </div>
        </div>
    );
};
export default ProjectCard;