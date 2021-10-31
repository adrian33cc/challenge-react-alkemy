import React, { useContext } from "react";
import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroesContext from "../../context/heroes/heroesContext";

const HeroeCard = ({ heroe }) => {
  const {
    name,
    image: { url },
    biography,
  } = heroe;

  const heroesContext = useContext(HeroesContext);
  const { handleHero, addHeroTeam } = heroesContext;

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
          {isGood(biography.alignment)}
        </Stack>
      </Card.Header>

      <Card.Img
        variant="top"
        src={url}
        onClick={() => addHeroTeam(heroe)}
        className="add-hero"
      />
    </Card>
  );
};

export default HeroeCard;
