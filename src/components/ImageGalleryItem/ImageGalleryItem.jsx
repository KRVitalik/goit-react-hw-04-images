import { GalleryItemStyled, ImageGalleryItemImage } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, handleImageClick }) => {
  return (images.map(image => {
    const {id, webformatURL, tags}=image
    return <GalleryItemStyled key={id}>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags} 
        onClick={()=> handleImageClick(image) }
      />
</GalleryItemStyled>
  }) );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  handleImageClick: PropTypes.func,
}

export default ImageGalleryItem;