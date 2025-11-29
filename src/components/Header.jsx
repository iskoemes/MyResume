import React from "react";
import jsPDF from "jspdf";

const Header = () => {
    const downloadResume = () => {
        const doc = new jsPDF();
        doc.text('Рыскелди Мырзалиев - Frontend Developer', 10, 10);
        doc.text('Навыки: HTML, CSS, JavaScript, React', 10, 30);
        doc.save('resume.pdf');
    };

    return (
        <header className="header">
            <div className="header-container">
                <div>
                    <h1 className="header-title">Рыскелди Мырзалиев</h1>
                    <p className="header-subtitle">Frontend Developer</p>
                    <p className="header-desc">JavaScript · TypeScript · React</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={downloadResume}
                        className="button button-blue"
                    >
                        Скачать резюме</button>
                        <address>
                        <a href="mailto:+996770229992" className="button button-green">
                            Связаться
                        </a>
                        </address>
                </div>
            </div>
        </header>
    );
};
export default Header;