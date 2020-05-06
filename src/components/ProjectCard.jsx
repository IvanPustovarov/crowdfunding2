import React from "react";

const ProjectCard = (props) => {
  let card = props.card;
  return (
    <>
      Фото проекта: <img src={card.photo} alt="photo1" />
      <br></br>
      Проект номер: {card.id}
      <br></br>
      Название проекта: {card.name}
      <br></br>
      Описание проекта: {card.description}
      <br></br>
      Руководители проекта: {card.mentor}
      <br></br>
    </>
  );
};

export default ProjectCard;
