const ImageCard = ({ alt, urls, openModal }) => {
  return (
    <div>
      <img src={urls.small} alt={alt} onClick={() => openModal(urls.regular)} />
    </div>
  );
};

export default ImageCard;
