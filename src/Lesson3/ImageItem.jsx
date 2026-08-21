const ImageItem = ({ images }) => {
  return (
    <div>
      <img src={images.urls.small} alt="" />
    </div>
  );
};

export default ImageItem;
