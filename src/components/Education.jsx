import React from "react";

const Education = () => {
    return (
        <section className="education-section">
            <h2 className="section-title">Образование и курсы</h2>
            <div className="education-block">
                <h3>Профессиональный лицей 98</h3>
                <p>Веб разработчик, 2024</p>
            </div>
            <div className="education-block">
                <h3>Курсы</h3>
                <ul className="skill-list">
                    <li>Компьютерная грамотность</li>
                    <li>Веб дизайн</li>
                </ul>
            </div>
        </section>
    );
};
export default Education;