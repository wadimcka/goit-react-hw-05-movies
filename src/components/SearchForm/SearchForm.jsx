import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handlInputChange = event => {
    const query = event.target.value;
    if (!query || query === '') {
      setSearchParams({});
      setSearchQuery('');
      return;
    }
    setSearchParams({ searchQuery: query });
    setSearchQuery(event.target.value.trim());
  };

  const handlerFormSubmit = event => {
    event.preventDefault();
    if (!searchQuery) {
      toast.warn('Nothing was found for your request! Try again.');
      return;
    }
    setSearchQuery('');
    onSubmit(searchQuery);
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
