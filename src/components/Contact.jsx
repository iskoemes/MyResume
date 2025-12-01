import React from "react";

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="section-title">Давайте сотрудничать</h2>
            <p style={{ marginBottom: '1rem' }}>
                Я открыт для новых проектов, сотрудничество и интересных идей.
            </p>
            <address>
            <a href="mailto:ryskeldimyrzaliev20@icloud.com" className="button button-blue contact-button">
                Отправить сообщение
            </a>
            </address>

            <div className="icon">
                <a href="https://web.telegram.org/k/" target="_blank"><img className="icon-img" src="telegram.png" alt="telegram" /></a>
                <a href="https://www.instagram.com/myrzal1evvv?igsh=MWlxZDhhZjM3aDA1dA%3D%3D&utm_source=qr" target="_blank"><img className="icon-img" src="instagram.png" alt="instagram" /></a>
                <a href="https://github.com/" target="_blank"><img className="icon-img" src="github.svg" alt="GitHub" /></a>
            </div>
        </section>
    );
};
export default Contact;