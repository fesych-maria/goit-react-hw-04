import "./App.css";
import { fetchImagesWithQuery } from "./services/images-api";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImagesWithQuery(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </Container>
  );
}

export default App;
