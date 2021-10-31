import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import HeroesContext from "../context/heroes/heroesContext";
const Heroe = ({ match }) => {
  const heroesContext = useContext(HeroesContext);
  const { heroSelect, searchHeroURL } = heroesContext;
  const { name, image,biography, appearance,work } = heroSelect;
  
  const [isloading, setIsloading] = useState(true);
  //console.log(match.params)

  const isGood = (alignment) => {
    if (alignment === "good") {
      return <h2 className="text-center rounded p-4 bg-success text-white font-weight-bold "> HEROE </h2>;
    } else {
      return <h2 className=" text-center rounded p-4 bg-danger text-white"> VILLANO </h2>;
    }
  };

  

  useEffect(() => {
    if (Object.entries(heroSelect).length === 0) {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
      searchHeroURL(match.params);
    } else {
      setIsloading(false);
    }
  }, [heroSelect]);

  return (
    <Layout>
      {!isloading ? (
        <Container>
          <h1 className="p-4 text-center"> Información </h1>

          <Row gap={2} >
            <Col>
              <Image src={image.url} rounded className="hero-image" />
            </Col>
            <Col md={8} className="details-hero">
              {isGood(biography.alignment)}
              <Stack >
                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Nombre:</h3> 
                  <p className="p-1" > {name} </p>
                </div>

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Alias:</h3> 
                  {
                    biography.aliases.map(alias =><p key={alias} className="p-1" > {alias}, </p> )
                  }
                </div>

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Peso:</h3> 
                  <p className="p-1" > {appearance.weight[1]} </p>
                </div>

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Altura:</h3> 
                  <p className="p-1" > {appearance.height[1]} </p>
                </div>

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Color de ojos:</h3> 
                  <p className="p-1" > Hay probleamas con eye-color </p>
                </div>  

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Color de cabello:</h3> 
                  <p className="p-1" > {appearance.weight[1]} </p>
                </div>

                <div className="d-flex detail-hero" >
                  <h3 className="p-1" >Lugar de trabajo:</h3> 
                  <p className="p-1" > {work.base} </p>
                </div>
            
              </Stack>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>Cargando...</h1>
      )}
    </Layout>
  );
};

export default Heroe;
