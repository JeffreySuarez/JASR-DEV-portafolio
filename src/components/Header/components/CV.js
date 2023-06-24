import React from "react";
import styled from "styled-components";
import Document from "../../../assets/doc/CVJeffreySuarezRey.pdf";

const CV = () => {
  return (
    <Button>
      <a href={Document} target="_blank" rel="noreferrer">
        DOWNLOAD CV
      </a>
    </Button>
  );
};

const Button = styled.button`
  background-color: #f70838;
  color: #d7dae3;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #d7dae3;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    padding: 5px 10px 5px 10px;
    font-size: 18px;
  }
`;

export default CV;
