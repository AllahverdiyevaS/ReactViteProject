// import { useState } from "react";
import "./App.css";
import { useState } from "react";
// import Api from "./Lesson3/Api";
// import Search from "./Lesson3/Search";
// import ImageList from "./Lesson3/ImageList";
import TaskCreatForm from "./Lesson4/TaskCreatForm";
import TasksList from "./Lesson4/TasksList";
// import NewsCard from "./Lesson1/NewsCard";

// import ProductCard from "./Lesson1/ProductCard";
// import StudentsInfo from "./Lesson1/StudentsInfo";
// import Cards from "./Lesson2/Cards";
// Lesson 1 ve 2
// function App() {
//   return (
//     <div>
//       {/* <h1>Salam Dunya!</h1>
//       <ProductCard />
//       <StudentsInfo />
//       <NewsCard /> */}
//       <Cards />
//     </div>
//   );
// }
// Lesson3
// function App() {
//   const [imageList, setImages] = useState([]);
//   const handleSerach = async (term) => {
//     const result = await Api(term);
//     console.log(result);
//     setImages(result);
//   };
//   return (
//     <>
//       <Search search={handleSerach} />
//       <ImageList imagesArray={imageList} />
//     </>
//   );
// }
// export default App;

// Lesson4
function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description) => {
    const createTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999999),
        title,
        description,
      },
    ];

    setTasks(createTask);
  };
  return (
    <div className="main">
      <TaskCreatForm onCreate={createTask} />
      <TasksList tasks={tasks} />
    </div>
  );
}
export default App;
