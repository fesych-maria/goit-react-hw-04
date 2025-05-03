import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ alt_description, id, urls }) => (
        <li key={id}>
          <ImageCard alt={alt_description} urls={urls} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
