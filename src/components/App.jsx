import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = { 
    textValue: '',
    image: '',
  } 
  
  handleSearchbarValue = (textValue) => {
    this.setState({ textValue })
  }

  onClickOpenModal = (image) => {
    this.setState({ image })
    this.setState({ modal:true })
  }

  closeModal = () => {
return this.setState({ modal:false })
  }


  render() { 
    const{textValue, image, modal}=this.state
    return (
      <>
        <Searchbar onSubmit={ this.handleSearchbarValue } />
        <ImageGallery
          onClickOpenModal={this.onClickOpenModal}
          textValue={textValue} />
        {modal && <Modal closeModal={this.closeModal} image={ image } />}
      </>
    );
  }
}
 
export default App;