import React from "react";
import { Row, Col } from "react-bootstrap";
import HeroeCard from "./HeroeCard";

const HeroesList = ({ heroesArray }) => {
  return (
    <>
      {heroesArray.map((heroe) => (
        <Col key={heroe.id} >
          <HeroeCard heroe={heroe} />
        </Col>
      ))}
    </>
  
  );
};

export default HeroesList;
