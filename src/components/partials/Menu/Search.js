import React, { useState } from 'react';
import search from '../../../assets/svg/search.svg';
import { Input, Img, Container } from './Search.style';
const Search = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <Container id='search-container'>
      <Img
        onClick={() => {
          setShowInput((prev) => !prev);
        }}
        src={search}
        alt='search'
        title='Szukaj instrukcji'
      />
      <Input showInput={showInput} placeholder='Szukaj...' type='text' />
    </Container>
  );
};

export default Search;
