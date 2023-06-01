import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

const CategoriesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

const CategoryItem = styled.li`
  margin: 10px;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
`;

const CategoryDescription = styled.p`
  font-size: 16px;
  color: #666666;
`;

const CategoriesPage = () => {
  const categories = [
    {
        title: 'Desarrollo Web',
        description: 'Aprende a crear sitios web y aplicaciones web interactivas.',
      },
      {
        title: 'Diseño Gráfico',
        description: 'Descubre las técnicas y herramientas para crear diseños atractivos.',
      },
      {
        title: 'Marketing Digital',
        description: 'Aprende a promocionar productos y servicios utilizando estrategias digitales.',
      },
      {
        title: 'Programación',
        description: 'Descubre el mundo de la programación y aprende a desarrollar software.',
      },
      
      {
        title: 'Negocios y emprendimiento',
        description: 'Descubre cómo iniciar y administrar tu propio negocio.',
      },
    // Agrega más categorías según tus necesidades
  ];

  return (
    <CategoriesContainer>
      <Title>Categorías</Title>
      <CategoriesList>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryDescription>{category.description}</CategoryDescription>
          </CategoryItem>
        ))}
      </CategoriesList>
    </CategoriesContainer>
  );
};

export default CategoriesPage;
