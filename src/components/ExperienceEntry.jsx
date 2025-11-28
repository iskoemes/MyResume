import React from "react";

const ExperienceEntry = ({ title, company, period, location}) => {
    return (
    <div className="experience-entry">
        <h3 className="experience-title">{title}</h3>
        <p>{company},{period},{location}</p>
    </div>
    );
};
export default ExperienceEntry;