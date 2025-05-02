import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ alt_description, description, id, likes, links, urls }) => (
        <li key={id}>
          <ImageCard
            alt={alt_description}
            description={description}
            likes={likes}
            urls={urls}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
