import React from 'react';

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      titulo: 'Curso de Programación',
      descripcion: 'Aprende a programar desde cero.',
      duracion: '10 horas',
    },
    {
      id: 2,
      titulo: 'Curso de Diseño Gráfico',
      descripcion: 'Aprende las mejores técnicas de diseño gráfico.',
      duracion: '8 horas',
    },
    {
      id: 3,
      titulo: 'Curso de Marketing Digital',
      descripcion: 'Descubre las estrategias de marketing digital más efectivas.',
      duracion: '12 horas',
    },
  ];

  return (
    <div>
      <h1>Cursos</h1>
      <p>Explora nuestra amplia selección de cursos disponibles:</p>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <p>Duración: {curso.duracion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;
