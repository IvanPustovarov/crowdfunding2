import React from "react";
const Profile = (props) => {
  let person = props.people;
  return (
    <>
      <hr />
      Фото: {person.photo}
      <br />
      Имя: {person.name}
      <br />
      Возраст: {person.year}
      <br />
      Регион: {person.region}
      <br />
      Должность: {person.role}
      <br />О себе: {person.about}
      <hr />
    </>
  );
};
export default Profile;
