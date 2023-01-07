import React from "react";
import styled from "styled-components";
import { SobreMiComponent } from "../components/SobreMiComponent/SobreMiComponent";
const Resume = () => {
  return (
    <ContainerResume>
      <SobreMiComponent />
    </ContainerResume>
  );
};
const ContainerResume = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
`;
export default Resume;
