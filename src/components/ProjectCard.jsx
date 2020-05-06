import React from "react";

const ProjectCard = (props) => {
  let card = props.card;
  return (
    <>
      Фото проекта: <img src={card.photo} alt="photo1" />
      <br />
      Проект номер: {card.id}
      <br />
      Название проекта: {card.name}
      <br />
      Описание проекта: {card.description}
      <br />
      Руководители проекта: {card.mentor}
      <br />
    </>
  );
};

export default ProjectCard;
