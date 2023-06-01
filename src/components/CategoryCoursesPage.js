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

const CourseList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
`;

const CourseItem = styled.li`
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #ffffff;
`;

const CourseName = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 16px;
  color: #666666;
`;

const CategoryCoursesPage = ({ match }) => {
  // Simulación de datos de cursos para una categoría específica
  const courses = [
    {
      id: 1,
      name: 'Curso de Desarrollo Web Avanzado',
      description: 'Aprende técnicas avanzadas de desarrollo web.',
    },
    {
      id: 2,
      name: 'Curso de Diseño Gráfico Profesional',
      description: 'Domina las herramientas y principios del diseño gráfico.',
    },
    {
      id: 3,
      name: 'Curso de Marketing Digital Estratégico',
      description: 'Descubre estrategias efectivas de marketing digital.',
    },
    // Agrega más cursos según tus necesidades
  ];

  const categoryId = match.params.categoryId;

  // Filtrar los cursos por la categoría actual
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId);

  return (
    <CourseContainer>
      <CourseTitle>Cursos de la categoría {categoryId}</CourseTitle>
      <CourseList>
        {filteredCourses.map((course) => (
          <CourseItem key={course.id}>
            <CourseName>{course.name}</CourseName>
            <CourseDescription>{course.description}</CourseDescription>
          </CourseItem>
        ))}
      </CourseList>
    </CourseContainer>
  );
};

export default CategoryCoursesPage;
