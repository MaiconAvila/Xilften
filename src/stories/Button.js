import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  position: fixed;
  width: 140px;
  height: 3.5rem;
  margin: 1rem 0 0 1rem;
  font-weight: bold;
  color: #7159c1;
  background: #fff;
  border: 3px solid #7159c1;
  border-radius: 5px;
`;

export const Button = ({ children }) => {
  return (
  <StyleButton type="submit">
    { children }
  </StyleButton>)
}