import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CourseListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const courses = [
  {
    id: 1,
    title: 'Curso de Programación en React',
    description: 'Aprende a desarrollar aplicaciones web con React.js',
    price: '$99',
  },
  {
    id: 2,
    title: 'Curso de Diseño UX/UI',
    description: 'Domina el diseño de interfaces de usuario',
    price: '$79',
  },
  {
    id: 3,
    title: 'Curso de Marketing Digital Avanzado',
    description: 'Estrategias avanzadas de marketing en línea',
    price: '$129',
  },
  {
    id: 4,
    title: 'Curso de Desarrollo de Apps Móviles',
    description: 'Crea aplicaciones móviles para iOS y Android',
    price: '$109',
  },
  {
    id: 5,
    title: 'Curso de Análisis de Datos con Python',
    description: 'Aprende a analizar datos utilizando Python',
    price: '$89',
  },
  {
    id: 6,
    title: 'Curso de SEO y Posicionamiento Web',
    description: 'Mejora el posicionamiento de tu sitio web en los motores de búsqueda',
    price: '$69',
  },
  {
    id: 7,
    title: 'Curso de Fotografía Digital',
    description: 'Descubre las técnicas de fotografía digital',
    price: '$59',
  },
  {
    id: 8,
    title: 'Curso de Administración de Proyectos',
    description: 'Gestiona proyectos de manera efectiva',
    price: '$89',
  },
  {
    id: 9,
    title: 'Curso de Desarrollo de Videojuegos',
    description: 'Crea tus propios videojuegos desde cero',
    price: '$99',
  },
  {
    id: 10,
    title: 'Curso de Inglés Conversacional',
    description: 'Mejora tus habilidades de conversación en inglés',
    price: '$49',
  },
  // Agrega más cursos según tus necesidades
];

const CourseList = () => {
  return (
    <CourseListContainer>
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ))}
    </CourseListContainer>
  );
};

export default CourseList;
    