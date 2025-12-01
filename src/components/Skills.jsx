import React from "react";

const About = () => {
    return (
        <section className="section">
            <h2 className="section-title">
                Навыки и технологии
            </h2>
            <div className="skills-grid">
                <div className="skills-column">
                    <div className="skills-sibtitle">Frontend</div>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                         <li>React</li>
                         <li>TypeScript</li>
                         <li>Vite</li>
                         <li>Html</li>
                         <li>Css</li>
                         <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="skills-column">
                      <h3 className="skills-subtitle">Tools</h3>
                          <ul className="skills-list">
                             <li>Git</li>
                             <li>VS Code</li>
                             <li>Terminal</li>
                             <li>Figma</li>
                         </ul>
                 </div>
            </div>
        </section>
    );
};
export default About; 