const ImageCard = ({ alt, description, likes, urls }) => {
  return (
    <div>
      <img src={urls.small} alt={alt} />
    </div>
  );
};

export default ImageCard;
