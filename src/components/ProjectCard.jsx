import React from "react";

const ProjectCard = ({title, role, stack, achievements}) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p> <strong>Роль:</strong> {role}</p>
            <p> <strong>Стек:</strong> {stack}</p>
            <p> <strong>Достижения:</strong> {achievements}</p>
        </div>
    );
};
export default ProjectCard;