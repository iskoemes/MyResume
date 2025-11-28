import React from "react";
import ExperienceEntry from "./ExperienceEntry";

const Experience = () => {
    const experiences = [
        {
            title: 'Стажер Frontend-разработчик',
            company: '#',
            period: '#',
        },
        {
            title: 'Стажер Frontend-разработчик',
            company: '#',
            period: '#',
        },
        {
            title: 'Стажер Frontend-разработчик',
            company: '#',
            period: '#',
        },
    ]

    return (
        <section className="section">
            <h2 className="section-title">Опыт работы</h2>
            {experiences.map((exp, index) => (
                <ExperienceEntry key={index} {...exp} />
            ))}
        </section>
    );
};
export default Experience;