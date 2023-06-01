import React from 'react';
import styled from 'styled-components';
import { courses } from '../data'; // Importa el arreglo de cursos

const CourseDetailContainer = styled.div`
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
  font-size: 16px;
  color: #666666;
  margin-bottom: 30px;
`;

const CourseDetailPage = ({ match }) => {
  const courseId = parseInt(match.params.courseId); // Convierte el courseId en un número entero

  // Busca el curso correspondiente en el arreglo de cursos
  const course = courses.find(course => course.id === courseId);

  if (!course) {
    return <div>Curso no encontrado</div>; // Manejo del caso en que no se encuentre el curso
  }

  return (
    <CourseDetailContainer>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseDescription>{course.description}</CourseDescription>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duración:</strong> {course.duration}</p>
      <p><strong>Precio:</strong> {course.price}</p>
    </CourseDetailContainer>
  );
};

export default CourseDetailPage;
