import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 30px;
`;

const ServicesTitle = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
`;

const ServicesList = styled.ul`
  list-style: none;
  text-align: left;
  margin-bottom: 30px;
`;

const ServiceItem = styled.li`
  font-size: 16px;
  color: #666666;
  margin-bottom: 10px;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>Acerca de nosotros</Title>
      <Description>En nuestra plataforma de venta de cursos, ofrecemos una amplia variedad de servicios educativos para ayudarte a expandir tus conocimientos y habilidades. Nuestro objetivo es brindarte cursos de alta calidad impartidos por expertos en diferentes áreas.</Description>
      <ServicesTitle>Servicios que ofrecemos</ServicesTitle>
      <ServicesList>
        <ServiceItem>Cursos en línea: Accede a una amplia selección de cursos en línea en diversos temas, desde desarrollo web y programación hasta diseño gráfico y marketing digital.</ServiceItem>
        <ServiceItem>Tutorías personalizadas: Si necesitas un enfoque más individualizado, ofrecemos tutorías personalizadas para ayudarte a alcanzar tus objetivos educativos de manera más efectiva.</ServiceItem>
        <ServiceItem>Recursos de aprendizaje: Además de los cursos, también proporcionamos una variedad de recursos gratuitos, como artículos, tutoriales y libros electrónicos, para complementar tu aprendizaje.</ServiceItem>
        <ServiceItem>Comunidad de aprendizaje: Únete a nuestra comunidad de aprendizaje, donde podrás interactuar con otros estudiantes, compartir conocimientos y colaborar en proyectos.</ServiceItem>
      </ServicesList>
      <p>¡Explora nuestra plataforma y encuentra el curso perfecto para ti! Estamos comprometidos en brindarte una experiencia de aprendizaje enriquecedora y satisfactoria.</p>
    </AboutContainer>
  );
};

export default AboutPage;


