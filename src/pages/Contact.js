import React from "react";
import styled from "styled-components";
import { ContactComponent } from "../components/contactComponent/ContactComponent";
const Contact = () => {
  return (
    <ContainerContact>
      <ContactComponent />
    </ContainerContact>
  );
};
const ContainerContact = styled.div`
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
`;
export default Contact;
