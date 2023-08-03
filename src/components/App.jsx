import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

const App = () => {
  const [textValueApp, setTextValueApp] = useState('');
  const [image, setImage] = useState('');
  const [modal, setModal] = useState(false);

    return (
      <>
        <Searchbar handleSearchbarValue={(textValueApp)=>setTextValueApp( textValueApp )} />
        <ImageGallery
          onClickOpenModal={(image) => {
            setImage(image)
            setModal(true)
          }}
          textValue={textValueApp} />
        {modal && <Modal closeModal={()=>setModal(false)} image={ image } />}
      </>
    );
}
 
export default App;