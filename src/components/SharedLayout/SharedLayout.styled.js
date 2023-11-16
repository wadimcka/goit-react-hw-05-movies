import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  color: navy;
  padding: 20px;
  text-align: left;
`;
export const NavList = styled.ul`
  display: flex;
`;

export const NavBtn = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 50px;

  &.active {
    color: white;
    background-color: navy;
  }
`;
