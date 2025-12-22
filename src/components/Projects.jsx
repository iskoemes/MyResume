import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "TodoList",
      role: "Frontend developer",
      stack: "React, JavaScript, HTML, CSS",
      achievements:
        "Создание функционального ToDoList с возможностью добавления, удаления и редактирования задач. Реализация фильтрации задач по статусу выполнения.",
      image: "/todoList.png",
      github: "https://github.com/iskoemes/TodoList",
    },
    {
      title: "RikiMorty",
      role: "Frontend developer",
      stack: "React, JavaScript, HTML, CSS",
      achievements:
        'Разработка веб-приложения для просмотра информации о персонажах из сериала "Рик и Морти". Интеграция с внешним API для получения данных о персонажах и их отображение в удобном формате.',
      image: "/rikiMorty.png",
      github: "https://github.com/iskoemes/RikiMorty",
    },
    {
      title: "OpenHelp",
      role: "Frontend developer",
      stack: "React, JavaScript, HTML, CSS",
      achievements:
        "Участие в разработке платформы для оказания взаимопомощи между пользователями. Реализация интерфейса для создания и поиска запросов на помощь, а также система отзывов и рейтингов для повышения доверия между участниками.",
      image: "/openHelp.png",
      github: "https://github.com/iskoemes/OpenHelp",
    },
    {
      title: "Bloom&Fest",
      role: "Frontend developer",
      stack: "React, JavaScript, HTML, CSS",
      achievements:
        "Участие в разработке веб-платформы для фестиваля BloomFest. Реализация пользовательского интерфейса с навигацией по страницам, каталогом и интерактивными элементами. Настройка клиентской логики, роутинга и адаптивного интерфейса для удобства пользователей.",
      image: "/bloomFest.png",
      github: "https://github.com/iskoemes/MyResume",
    },
  ];

  return (
    <section className="">
      <h2 className="section-title">Мои проекты</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
