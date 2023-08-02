import {ThreeDots } from  'react-loader-spinner'
import { LoaderStyled } from './Loader.styled';

const Loader = () => {
    return ( 
<LoaderStyled>
<ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
</LoaderStyled>
     );
}

export default Loader