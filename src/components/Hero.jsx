import React from "react";
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className="helo">
            <p className="hero-text">
                Разрабатываю веб-приложения с упором на скорость, 
                архитектуру и удобство. Создаю интерфейсы, которые не только красивы, 
                но и интуитивны в использовании.
            </p>
            <div className="hero-stats">
                <div className="hero-stat">
                    <CountUp end={"Нет"} suffix="+" duration={2} className="hero-number" />
                    <p>опыта работы</p>
                </div>
                <div className="hero-stat">
                    <CountUp end={3} suffix="+" duration={2} className="hero-number" />
                    <p>Проектов завершено</p>
                </div>
                <div className="hero-stat">
                    <CountUp end={0} suffix="+" duration={2} className="hero-number" />
                    <p>Довольных клиентов</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;