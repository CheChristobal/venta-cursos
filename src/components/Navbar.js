import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  color: #333333;
  text-decoration: none;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const NavMenuItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const NavLink = styled(Link)`
  color: #666666;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #f1c40f;
  }
`;
const NavbarListItem = styled.li`
  margin-left: 20px;

  &:first-child {
    margin-left: 0;
  }
`;


const MobileMenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 3px;
      margin-bottom: 5px;
      background-color: #333333;
      transition: transform 0.3s, opacity 0.3s;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.active {
      span:first-child {
        transform: rotate(45deg) translateX(2px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:last-child {
        transform: rotate(-45deg) translateX(2px);
      }
    }
  }
`;

const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <Logo to="/">Venta de Cursos</Logo>
      <NavMenu className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
        <NavMenuItem>
          <NavLink to="/">Inicio</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/about">Quienes somos</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/contact">Contacto</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/categoria">Categorias</NavLink>
        </NavMenuItem>
      </NavMenu>
      <MobileMenuToggle
        className={isMobileMenuOpen ? 'active' : ''}
        onClick={handleMobileMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuToggle>
    </NavbarContainer>
  );
};

export default Navbar;
