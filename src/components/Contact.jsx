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
        </section>
    );
};
export default Contact;