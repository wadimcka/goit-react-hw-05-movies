import React from 'react';
// import { Link } from 'react-router-dom';
import { StyledGoBackBtn } from './GoBackBtn.styled';

const GoBackBtn = ({ to }) => {
  return (
    <div>
      <StyledGoBackBtn to={to}>Go Back</StyledGoBackBtn>
    </div>
  );
};

export default GoBackBtn;
