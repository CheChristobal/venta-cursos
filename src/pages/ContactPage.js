import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  width: 300px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #666666;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f1c40f;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario de contacto
  };

  return (
    <ContactContainer>
      <Title>Contacto</Title>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Nombre:</Label>
          <Input type="text" id="name" name="name" />
        </FormField>
        <FormField>
          <Label htmlFor="email">Correo electrónico:</Label>
          <Input type="email" id="email" name="email" />
        </FormField>
        <FormField>
          <Label htmlFor="message">Mensaje:</Label>
          <TextArea id="message" name="message" rows="5"></TextArea>
        </FormField>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
