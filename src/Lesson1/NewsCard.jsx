import NewsItem from "./NewsItem";
import { useState } from "react";
const NewsCard = () => {
  const [newInfos, setNewInfos] = useState([]);
  function getRandomNews() {
    const news = [
      {
        title: "News 1",
        img: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "hdgfjkhlfrjidlsfjodlijdiolkjdsmncy b",
        link: "#",
      },
      {
        title: "News 2",
        img: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "hdgfjkhlfrjidlsfjodlijdiolkjdsmncy b",
        link: "#",
      },
      {
        title: "News 3",
        img: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "hdgfjkhlfrjidlsfjodlijdiolkjdsmncy b",
        link: "#",
      },
      {
        title: "News 4",
        img: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "hdgfjkhlfrjidlsfjodlijdiolkjdsmncy b",
        link: "#",
      },
      {
        title: "News 5",
        img: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "hdgfjkhlfrjidlsfjodlijdiolkjdsmncy b",
        link: "#",
      },
    ];

    return news[Math.floor(Math.random() * news.length)];
  }
  function handleClick() {
    setNewInfos([...newInfos, getRandomNews()]);
  }

  return (
    <>
      <div className="news_container">
        <button
          className="rounded-md bg-sky-500 hover:bg-blue-500 p-2 cursor-pointer"
          onClick={handleClick}
        >
          Add news
        </button>
        <div className="flex flex-row justify-start flex-wrap m-8 gap-4">
          {newInfos.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsCard;
