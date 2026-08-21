import ImageItem from "./ImageItem";

const ImageList = ({ imagesArray }) => {
  return (
    <div className="image_list">
      {imagesArray.map((image, index) => (
        <ImageItem key={index} images={image} />
      ))}
    </div>
  );
};

export default ImageList;
