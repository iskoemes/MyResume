import React from "react";

const Education = () => {
    return (
        <section className="section">
            <h2 className="section-title">Образование и курсы</h2>
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontWeight: 'bold' }}>Профессиональный лицей 98</h3>
                <p>Веб разработчик, 2024</p>
            </div>
            <div>
                <h3 style={{ fontWeight: 'bold' }}>Курсы</h3>
                <ul className="skill-list">
                    <li>Компьютерная грамотность</li>
                    <li>Веб дизайн</li>
                </ul>
            </div>
        </section>
    );
};
export default Education;