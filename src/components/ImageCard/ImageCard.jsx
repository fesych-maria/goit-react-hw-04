import css from "./ImageCard.module.css";

const ImageCard = ({ alt, urls, openModal }) => {
  return (
    <div className={css.container}>
      <img src={urls.small} alt={alt} onClick={() => openModal(urls.regular)} />
    </div>
  );
};

export default ImageCard;
