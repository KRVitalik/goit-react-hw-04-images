import { useEffect } from "react";
import { ModalStyled, Overlay } from "./Modal.styled";
import PropTypes from 'prop-types';

const Modal = ({closeModal, image}) => {

  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.code !== 'Escape') {

        return
      } closeModal()
    };
    window.addEventListener("keydown", closeModalByEscape)

    return () => window.removeEventListener('keydown', closeModalByEscape)
  }, [closeModal]);

  const handleCloseClick = (e) => {
        if (e.target.tagName === "IMG") {
      return
    } closeModal()
  }
  
  const { largeImageURL, tags } = image

    return (
      <Overlay
        onClick={handleCloseClick}>
  <ModalStyled>
    <img src={largeImageURL} alt={tags} />
  </ModalStyled>
</Overlay>
    );
}

Modal.propTypes = {
  image: PropTypes.object,
  closeModal: PropTypes.func,
}
 
export default Modal;