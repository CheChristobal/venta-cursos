import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #f1c40f;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Bienvenido a nuestra plataforma de cursos en línea</HeroTitle>
      <HeroSubtitle>Descubre cursos en diversas categorías y amplía tus conocimientos</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
