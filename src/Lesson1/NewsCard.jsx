import NewsItem from "./NewsItem";

const NewsCard = () => {
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

  return (
    <div className="news_container">
      <h2>News</h2>

      {news.map((item) => (
        <NewsItem
          key={item}
          title={item.title}
          img={item.img}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NewsCard;
