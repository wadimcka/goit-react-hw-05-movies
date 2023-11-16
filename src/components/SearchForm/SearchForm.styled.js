import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
`;

export const SearchBtn = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;

  &.active {
    color: white;
    background-color: navy;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  max-width: 600px;
`;
