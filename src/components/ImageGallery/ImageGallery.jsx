import { getImages } from "components/API/pixabayAPI";
import Button from "components/Button/Button";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import { Component } from "react";
import { GalleryContainer, ImageGalleryComponent } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

class ImageGallery extends Component {
      state = {
    images: null,
    isLoading: false,
    page: 1,
    totalPage: 0,
    textInfo:"",
  }  
    
componentDidUpdate(prevProps, prevState) {
    if (this.props.textValue !== prevProps.textValue) {
        this.setState({images: null, page:1,isLoading: true,})
    getImages(this.props.textValue, 1)
        .then((resp) => {
            if (resp.data.total === 0) { this.ifUserEntersWrongRequestName() }
            else this.ifLoadAllImages(resp)
this.setState({ images: resp.data.hits, })
})
        .catch((error) => {this.errorInfo(error)})
.finally(() => { this.setState({ isLoading: false, }) })
    }else if (this.state.page !== prevState.page && this.state.page !== 1) {
        this.setState({isLoading: true,})
        getImages(this.props.textValue, this.state.page)
        .then((resp) => {
                    this.setState({ images: [...prevState.images, ...resp.data.hits] })
            })
        .catch((error) => {console.log(error) })
        .finally(() => { this.setState({isLoading: false,})
 })
        }
    }

          errorInfo = (error) => {
  this.setState({
      images: null,
      totalPage: this.state.page,
      textInfo: error.response.data,
    })
        return
}

      ifUserEntersWrongRequestName = () => {
  this.setState({
      images: null,
      totalPage: this.state.page,
      textInfo: "We didn't find any images for your request",
  })
          return
}
  
  ifLoadAllImages = (resp) => {
    this.setState((prevState) => ({
      totalPage: Math.ceil(resp.data.total/12),
      images: prevState.images
      ? [...prevState.images, ...resp.data.hits]
      : resp.data.hits,
      textInfo:"All images is loaded"}
      ))
  }

handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
    }

    handleImageClick = (el) => {
    this.props.onClickOpenModal(el)
  }

    render() { 
  const {images, isLoading, totalPage, page, textInfo} = this.state
  return (
      <GalleryContainer>
      <ImageGalleryComponent>
        {images && <ImageGalleryItem handleImageClick={this.handleImageClick} images={images} />}
        </ImageGalleryComponent>
        {isLoading &&<Loader />}
      {totalPage === page ? <p>{textInfo}</p> : images && <Button handleLoadMore={this.handleLoadMore} />}
        </GalleryContainer>
    );
  }
}

ImageGallery.propTypes = {
    resp: PropTypes.object,
}
 
export default ImageGallery;