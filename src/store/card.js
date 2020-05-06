import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";
// import * as images from "../img";

// let images = require("../img/");
let pictureArray = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"];

let card = [
  {
    id: 1,
    name: "CS",
    description: "Амбициозный IT проект по CS (computer science) ищет средства",
    mentor: "Иван Крульков",
    photo: photo1,
  },
  {
    id: 2,
    name: "Algorithms",
    description: "Амбициозный IT проект по алгоритмам ищет средства",
    mentor: "Дмитрий Воротников",
    photo: photo2,
  },
  {
    id: 3,
    name: "Rights",
    description:
      "Правовой проект для защиты права выбора человека ищет средства",
    mentor: "Виталий Головин",
    photo: photo3,
  },
  {
    id: 4,
    name: "Health",
    description:
      "Оздоровительный проект для поддержки пожилого населения ищет средства",
    mentor: "Виталий Головин",
    photo: photo4,
  },
];

let people = [
  {
    photo: "link",
    name: "Иван Крульков",
    year: 28,
    region: "Russia",
    role: "mentor",
    about: "Работаю в сфере обучения уже 7 лет. Вырос в городе Казань",
  },
  {
    photo: "link",
    name: "Дмитрий Воротников",
    year: 30,
    region: "Russia",
    role: "mentor",
    about:
      "Большой опыт работы с разнообразными проектами. Учился в спец. школе",
  },
  {
    photo: "link",
    name: "Виталий Головин",
    year: 35,
    region: "Russia",
    role: "mentor",
    about:
      "Являюсь ментором двух амбициозных проектов в разных сферах деятельности. Занимаюсь боксом",
  },
  {
    photo: "link",
    name: "4",
    year: 20,
    region: "Russia",
    role: "participant",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "5",
    year: 20,
    region: "Russia",
    role: "participant",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "6",
    year: 20,
    region: "Russia",
    role: "participant",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "7",
    year: 20,
    region: "Russia",
    role: "investor",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "8",
    year: 20,
    region: "Russia",
    role: "investor",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "9",
    year: 20,
    region: "Russia",
    role: "investor",
    about: "lorem50",
  },
  {
    photo: "link",
    name: "10",
    year: 20,
    region: "Russia",
    role: "investor",
    about: "lorem50",
  },
];

export { card, people };
export { pictureArray };
