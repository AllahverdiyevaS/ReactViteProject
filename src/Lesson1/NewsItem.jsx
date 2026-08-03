const NewsItem = (props) => {
  const { title, img, description, link } = props;
  return (
    <div className="item_container" onClick={() => window.open(link, "_blank")}>
      <div className="img_container">
        <img src={img} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;
