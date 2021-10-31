import React from "react";
import { Row, Col } from "react-bootstrap";
import HeroeCard from "./HeroeCard";

const HeroesList = ({ heroesArray }) => {
  console.log(heroesArray);
  return (
    <>
      {heroesArray.map((heroe) => (
        <Col>
          <HeroeCard heroe={heroe} />
        </Col>
      ))}
    </>
  
  );
};

export default HeroesList;
