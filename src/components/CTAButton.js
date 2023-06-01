import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f1c40f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2b616;
  }
`;

const CTAButton = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/categorias');
  };

  return (
    <Button onClick={handleButtonClick}>Ver categorías</Button>
  );
};

export default CTAButton;
