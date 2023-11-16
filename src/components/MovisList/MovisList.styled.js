import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Movie = styled.li`
  width: 200px;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-align: center;
  text-decoration: none;
`;
