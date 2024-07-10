import { useState, useRef, useEffect } from "react";
import css from "./App.module.css";

import getImages from "../unsplash-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { iImage, iImageModal } from "./App.types";

const modalInitialParams = {
  isOpen: false,
  url: "",
  description: "",
};

export default function App() {
  const [searchImage, setSearchImage] = useState<string>("");
  const [images, setImages] = useState<iImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalParams, setModalParams] =
    useState<iImageModal>(modalInitialParams);

  const appRef = useRef();

  useEffect(() => {
    if (searchImage === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const {
          results,
          total_pages,
        }: { results: iImage[]; total_pages: number } = await getImages(
          searchImage,
          page
        );
        setImages((prevImages) => {
          return [...prevImages, ...results];
        });
        setShowLoadMoreBtn(page < Math.ceil(total_pages / 12));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchImage, page]);

  const handleSearch = (newImage: string) => {
    setSearchImage(newImage);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = (url: string, description: string) => {
    setModalParams({ isOpen: true, url, description });
  };

  const handleModalClose = () => {
    setModalParams(modalInitialParams);
  };

  return (
    <div>
      <h1 className={css.title}>Search Image Service</h1>
      <SearchBar onSearch={handleSearch} />

      {isError && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery cards={images} onImageClick={handleImageClick} />
      )}

      {images.length > 0 && !isLoading && showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}

      {isLoading && <Loader />}
      {modalParams && (
        <ImageModal
          url={modalParams.url}
          description={modalParams.description}
          isOpen={modalParams.isOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
