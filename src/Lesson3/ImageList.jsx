import ImageItem from "./ImageItem";

const ImageList = ({ imagesArray }) => {
  return (
    <div>
      {imagesArray.map((image, index) => (
        <ImageItem key={index} images={image} />
      ))}
    </div>
  );
};

export default ImageList;
