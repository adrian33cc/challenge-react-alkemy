import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import HeroeCard from "../components/heroes/HeroeCard";
import HeroesList from "../components/heroes/HeroesList";
import SearchHero from "../components/heroes/SearchHero";
import Layout from "../components/layout/Layout";
import { heroesAxios } from "../config/axios";

import HeroesContext from "../context/heroes/heroesContext";

const Home = () => {
  const heroesContext = useContext(HeroesContext);
  const { heroesFound, countHero, countVillain } = heroesContext;

  const [heroesList, setHeroesList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [heroes, setHeroes] = useState([]);
  const [teamComplete, setTeamComplete] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    heroesList.map(async (heroe) => {
      try {
        const response = await heroesAxios.get(`/${heroe}`);
        setHeroes((dataHeroe) => [...dataHeroe, response.data]);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  useEffect(() => {
    console.log(teamComplete);
    if (countHero <= 0 && countVillain <= 0) {
      setTeamComplete(true);
    }
    if (heroesFound.length > 0) {
      setVisible(false);
    }
  }, [countHero, countVillain, heroesFound]);

  console.log(heroes);
  //heroes.map(heroe => console.log(heroe.biography.full-name))

  return (
    <Layout>
      <Container className="mt-4">
        <h1 className="text-center mr-2"> Arma tu equipo de superheroes</h1>
        <SearchHero />
        {!teamComplete ? (
          <h2 className="text-center">
            {`Escoge ${countHero} heroe y ${countVillain} villanos`}
          </h2>
        ) : (
          <Alert variant="success" className="text-center">
            Equipo listo
          </Alert>
        )}

        {visible ? (
          <Row xs={1} md={5}  className="g-4">
            <HeroesList heroesArray={heroes} />
          </Row>
        ) : (
          <Row xs={1} md={5}  className="g-4">
            <HeroesList heroesArray={heroesFound} />

          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
