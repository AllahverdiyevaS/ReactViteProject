const NewsItem = (props) => {
  const { title, img, description, link } = props;
  return (
    <div
      class="bg-sky-500/50 rounded-md p-4 shadow-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="img_container">
        <img src={img} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;
