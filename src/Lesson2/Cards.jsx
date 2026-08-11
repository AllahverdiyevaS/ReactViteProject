import CardItem from "./CardItem";

import { useState } from "react";
const Cards = () => {
  const [courses, setCourses] = useState([]);
  function getRandomCourse() {
    const courseArray = ["Angular", "Bootstrap", "Ccsharp", "FullStack"];

    return courseArray[Math.floor(Math.random() * courseArray.length)];
  }
  function handleClick() {
    setCourses([...courses, getRandomCourse()]);
  }

  return (
    <>
      <div className="course_container">
        <button
          className="rounded-md bg-sky-500 hover:bg-blue-500 p-2 cursor-pointer"
          onClick={handleClick}
        >
          Add course
        </button>
        <div className="flex flex-row justify-start flex-wrap m-8 gap-4">
          {courses.map((item, index) => (
            <CardItem key={index} title={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
