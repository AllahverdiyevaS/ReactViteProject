import Angular from "../img/angular.jpg";
import Bootstrap from "../img/bootstrap5.png";
import Ccsharp from "../img/ccsharp.png";
import FullStack from "../img/fullStack.jpg";

const CardItem = ({ title }) => {
  const mappedObjectForImgTitle = { Angular, Bootstrap, Ccsharp, FullStack };
  return (
    <div className=" w-full max-w-80 bg-sky-500/50 rounded-md p-4 shadow-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 cursor-pointer flex flex-col">
      <div className=" w-full">
        <img src={mappedObjectForImgTitle[title]} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default CardItem;
