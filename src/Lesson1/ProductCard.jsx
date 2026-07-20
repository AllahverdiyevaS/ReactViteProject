const ProductCard = () => {
  const imgName = "Img name";
  const urlDecsription = "https://unsplash.com/de/s/fotos/notebook";
  const url =
    "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="container">
      <h2>Notbook</h2>

      <img src={url} alt={imgName} className="product_img" />
      <p>100$</p>
      <a href={urlDecsription} className="link">
        More Info
      </a>
      <button className="button">Buy</button>
    </div>
  );
};

export default ProductCard;
