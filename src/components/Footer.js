import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #34495e;
  color: #ffffff;
  padding: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Copyright>
        © {currentYear} Venta de Cursos. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
