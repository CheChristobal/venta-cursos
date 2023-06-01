import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #f1c40f;
`;

const EnrollButton = styled.button`
  background-color: #f1c40f;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CourseCard = ({ title, description, price }) => {
  return (
    <CardContainer>
      <CourseTitle>{title}</CourseTitle>
      <CourseDescription>{description}</CourseDescription>
      <Price>Precio: {price}</Price>
      <EnrollButton>¡Inscríbete ahora!</EnrollButton>
    </CardContainer>
  );
};

export default CourseCard;
