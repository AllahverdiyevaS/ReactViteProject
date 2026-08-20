import "./App.css";

import Api from "./Lesson3/Api";
import Search from "./Lesson3/Search";
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
function App() {
  const handleSerach = async (term) => {
    const result = await Api(term);
    console.log(result);
  };
  return (
    <>
      <Search search={handleSerach} />
    </>
  );
}
export default App;
