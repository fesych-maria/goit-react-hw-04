import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ items, openModal }) => {
  return (
    <ul>
      {items.map(({ alt_description, id, urls }) => (
        <li key={id}>
          <ImageCard alt={alt_description} urls={urls} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
