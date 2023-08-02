import { ButtonLoad } from "./Button.styled";
import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
    return ( 
        <ButtonLoad onClick={handleLoadMore} type="button">Load more</ButtonLoad>
     );
}

Button.propTypes = {
    handleLoadMore: PropTypes.func,
}
 
export default Button;