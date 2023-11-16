import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGoBackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  color: black;
  border: 1px solid black;
  border-radius: 8px;
  text-decoration: none;
  /* font-weight: 500; */
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;

  :hover {
    color: orangered;
  }
`;
