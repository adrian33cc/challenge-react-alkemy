import React, { useState, useContext, useEffect } from "react";
import { Alert, Card, Container, Row, Col, Stack } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import HeroesContext from "../context/heroes/heroesContext";
import HeroeCard from "../components/heroes/HeroeCard";
import HeroesList from "../components/heroes/HeroesList";
import { Link } from "react-router-dom";

const MyTeam = () => {
  //Todos estos guardaran el promedio
  const initialStats = {
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  };
  const [statsTeam, setStatsTeam] = useState(initialStats);
  const heroesContext = useContext(HeroesContext);
  const { team } = heroesContext;
  const [statsHero, setStatsHero] = useState([])

  useEffect(() => {
    let stat = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };
    team.map((heroe) => {
      let combatValue = parseInt(heroe.powerstats.combat) || 0;
      stat.combat = stat.combat + combatValue;

      let durability = parseInt(heroe.powerstats.durability) || 0;
      stat.durability = stat.durability + durability;

      let intelligence = parseInt(heroe.powerstats.intelligence) || 0;
      stat.intelligence = stat.intelligence + intelligence;

      let power = parseInt(heroe.powerstats.power) || 0;
      stat.power = stat.power + power;

      let speed = parseInt(heroe.powerstats.speed) || 0;
      stat.speed = stat.speed + speed;

      let strength = parseInt(heroe.powerstats.strength) || 0;
      stat.strength = stat.strength + strength;

      //setStatsHero([...statsHero,heroe.powerstats])
    });
    //console.log(stat)
    setStatsTeam(stat);
  }, []);

  const [majorPower, setMajorPower] = useState(0);
  console.log(statsHero)

  useEffect(() => {
    

  }, [team])

  //console.log(statsTeam);

  //console.log(team);
  return (
    <Layout>
      <Container>
        <Stack direction="horizontal" >
          <Link to='/' className="my-4 btn btn-warning">Regresar</Link>
          <h1 className="text-center p-4 ">Tu equipo</h1>
        </Stack>

        {team.length !== 0 ? (
          <Row className="mt-4">
            <Col>
              <Row xs={1} md={3} className="g-4">
                <HeroesList heroesArray={team} />
              </Row>
            </Col>

            <Col>
              <h2 className="text-center rounded p-4 bg-black text-white">
                Estadisticas Promedio del Equipo
              </h2>

              <Stack>
                <div className="d-flex detail-hero">
                  <h3 className="p-1">Combate:</h3>
                  <p className="p-1"> {statsTeam.combat / team.length} </p>
                </div>

                <div className="d-flex detail-hero">
                  <h3 className="p-1">Durabilidad:</h3>
                  <p className="p-1"> {statsTeam.durability / team.length} </p>
                </div>

                <div className="d-flex detail-hero">
                  <h3 className="p-1">Inteligencia:</h3>
                  <p className="p-1">
                    {" "}
                    {statsTeam.intelligence / team.length}{" "}
                  </p>
                </div>

                <div className="d-flex detail-hero">
                  <h3 className="p-1">Poder:</h3>
                  <p className="p-1"> {statsTeam.power / team.length} </p>
                </div>

                <div className="d-flex detail-hero">
                  <h3 className="p-1">Velocidad:</h3>
                  <p className="p-1"> {statsTeam.speed / team.length} </p>
                </div>

                <div className="d-flex detail-hero">
                  <h3 className="p-1">Fuerza:</h3>
                  <p className="p-1"> {statsTeam.strength / team.length} </p>
                </div>
              </Stack>
            </Col>
          </Row>
        ) : (
          <Alert variant="danger">No hay Heroes Seleccionados</Alert>
        )}
      </Container>
    </Layout>
  );
};

export default MyTeam;
