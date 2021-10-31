import React, { useState, useContext } from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import HeroesContext from "../../context/heroes/heroesContext";

const HeroeCard = ({ heroe }) => {
  let history = useHistory();

  const {
    name,
    image: { url },
    biography,
    powerstats:{combat,durability, intelligence, power, speed, strength}
  } = heroe;

  //console.log(heroe)

  const heroesContext = useContext(HeroesContext);
  const { handleHero, addHeroTeam, removeHeroTeam } = heroesContext;
  const acum = combat || 0 + durability ||0 + intelligence || 0 + power || 0 + speed || 0 + strength || 0;
  const acum2 = parseInt(combat) +  parseInt(durability)  + parseInt(intelligence)  + parseInt(power)  + parseInt(speed)  + parseInt(strength) ;
  const isGood = (alignment) => {
    if (alignment === "good") {
      return <Badge bg="success"> {alignment.toUpperCase()} </Badge>;
    } else {
      return <Badge bg="danger"> {alignment.toUpperCase()} </Badge>;
    }
  };

  return (
    <Card className=" mb-3 ">
      <Card.Header>
        <Stack direction="horizontal" gap={3}>
          <Stack>
            <Link
              to={`/${name}`}
              className="heroCardTitle"
              onClick={() => handleHero(heroe)}
            >
              <Card.Title> {name} </Card.Title>
            </Link>
            <Card.Subtitle>Alias: {biography.aliases[0]} </Card.Subtitle>
          </Stack>
          <Stack gap={1}>
            {isGood(biography.alignment)}
            <Badge> Total: {acum2} </Badge>
          </Stack>
        </Stack>
      </Card.Header>

      <div className=" add-hero">
        <Card.Img variant="top" src={url} onClick={() => addHeroTeam(heroe)} />
        {history.location.pathname === "/myteam" ? (
          <Button variant="danger" onClick={() => removeHeroTeam(heroe)}>
            Borrar
          </Button>
        ) : (
          <Button variant="success" onClick={() => addHeroTeam(heroe)}>
            Agregar
          </Button>
        )}
      </div>
    </Card>
  );
};

export default HeroeCard;
