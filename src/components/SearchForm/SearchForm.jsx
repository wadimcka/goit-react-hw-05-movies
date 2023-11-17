import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, SearchBtn } from './SearchForm.styled';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handlInputChange = event => {
    setSearchQuery(event.target.value.trim());
  };

  const handlerFormSubmit = event => {
    const query = searchQuery;
    console.log(query);
    event.preventDefault();
    if (!searchQuery) {
      toast.warn('Nothing was found for your request! Try again.');
      return;
    }
    setSearchParams({ searchQuery: query });
    setSearchQuery('');
    console.log(query);
  };

  return (
    <Container>
      <form onSubmit={handlerFormSubmit}>
        <input
          name="query"
          value={searchQuery}
          type="text"
          onChange={handlInputChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
    </Container>
  );
};

export default SearchForm;
