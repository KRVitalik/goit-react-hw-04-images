import { useState } from "react";
import { SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, SearchbarStyled } from "./Searchbar.styled";
import { ImSearch } from "react-icons/im";

const Searchbar = ({handleSearchbarValue}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchbarValue(value)
    setValue('')
  }
  
    return ( 
<SearchbarStyled>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit"><ImSearch />
      <SearchFormButtonLabel />
    </SearchFormButton>
    <SearchFormInput
      onChange={({target:{value}})=>setValue(value)}
      value={value}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchbarStyled>
     );
  }
 
export default Searchbar;