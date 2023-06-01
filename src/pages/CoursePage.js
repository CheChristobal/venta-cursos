import React from 'react';
import styled from 'styled-components';

const CourseContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;
`;

const CourseTitle = styled.h1`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

const CourseDescription = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 30px;
`;

const CoursePage = () => {
  return (
    <CourseContainer>
      <CourseTitle>Nombre del curso</CourseTitle>
      <CourseDescription>
        Descripción del curso. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur felis ac tellus congue pellentesque. Nullam sed volutpat lorem, et pretium eros. Fusce commodo fringilla ex, sed laoreet nibh varius eu.
      </CourseDescription>
      {/* Aquí puedes agregar el contenido adicional del curso */}
    </CourseContainer>
  );
};

export default CoursePage;
