import { getImages } from "components/API/pixabayAPI";
import Button from "components/Button/Button";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import {  useEffect, useState } from "react";
import { GalleryContainer, ImageGalleryComponent } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

const ImageGallery = ({ onClickOpenModal, textValue }) => {

  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [textInfo, setTextInfo] = useState("");
  const [textSearch, setTextSearch] = useState('');

useEffect(() => {

  const errorInfo = (error) => {
      setImages(null)
      setTotalPage(page)
      setTextInfo(error.response.data)
        return
  }
    
  const ifUserEntersWrongRequestName = () => {
    setImages(null)
    setTotalPage(page)
    setTextInfo("We didn't find any images for your request")
          return
}

  if (textValue !== textSearch) {
    setTextSearch(textValue)
    setImages(null)
    setPage(1)
    setPrevPage(1)
    setIsLoading(true)
  getImages(textValue, 1)
    .then((resp) => {
      if (resp.data.total === 0) { ifUserEntersWrongRequestName() }
      else ifLoadAllImages(resp)
    setImages(resp.data.hits)
})
.catch((error) => { if (error.response.data) { errorInfo(error) } })
.finally(() => {setIsLoading(false)})
    }
  else if (page !== prevPage && page !== 1) {
    setPrevPage(prevState => prevState + 1)
    setIsLoading(true)
    getImages(textValue, page)
  .then((resp) => {
    setImages([...images, ...resp.data.hits])
})
.catch((error) => { if (error.response.data) { errorInfo(error) } })
.finally(() => {setIsLoading(false)})
}
}, [images, page, prevPage, textSearch, textValue]);
  
  const ifLoadAllImages = (resp) => {
    setTotalPage(Math.ceil(resp.data.total / 12));
    setTextInfo("All images is loaded")
    setImages(prevImages => prevImages ? [...prevImages, ...resp.data.hits] : resp.data.hits )
  }

const handleLoadMore = () => {
  setPage(prevState => prevState + 1)
    }

const handleImageClick = (el) => {
    onClickOpenModal(el)
  }

return (
  <GalleryContainer>
  <ImageGalleryComponent>
    {images && <ImageGalleryItem handleImageClick={handleImageClick} images={images} />}
    </ImageGalleryComponent>
    {isLoading &&<Loader />}
  {totalPage === page ? <p>{textInfo}</p> : images && <Button handleLoadMore={handleLoadMore} />}
    </GalleryContainer>
);
}

ImageGallery.propTypes = {
  resp: PropTypes.object,
}
 
export default ImageGallery;