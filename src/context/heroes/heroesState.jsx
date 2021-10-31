import React, { useReducer } from "react";
import { heroesAxios } from "../../config/axios";
import {
  ADD_HERO_TEAM,
  ADD_VILLAIN_TEAM,
  HERO_SEARCH,
  HERO_SELECT,
  HERO_URL,
  REMOVE_HERO_TEAM,
  REMOVE_VILLAIN_TEAM,
} from "../types";
import HeroesContext from "./heroesContext";
import HeroesReducer from "./heroesReducer";
const HeroesState = (props) => {
  const initialState = {
    team: JSON.parse( localStorage.getItem('team')) || [],
    heroSelect: {},
    countHero: 3,
    countVillain: 3,
    heroesFound: {},
  };

  const [state, dispatch] = useReducer(HeroesReducer, initialState);

  const handleHero = (hero) => {
    dispatch({
      type: HERO_SELECT,
      payload: hero,
    });
  };

  const searchHeroURL = async ({ name }) => {
    console.log(name);

    try {
      const response = await heroesAxios.get(`/search/${name}`);
      //console.log(response);
      dispatch({
        type: HERO_URL,
        payload: response.data.results[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchHero = async ({ hero }) => {

    try {
      const response = await heroesAxios.get(`/search/${hero}`);
      if (response.data.response === "success") {
        dispatch({
          type: HERO_SEARCH,
          payload: response.data.results,
        });
      } else {
        console.log("No se encontraron heroes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addHeroTeam = (heroe) => {
    const {
      biography: { alignment },
    } = heroe;

    const isIncludeTeam = state.team.includes(heroe);

    if (!isIncludeTeam && (state.countHero >= 0 || state.countVillain >= 0)) {
      if (alignment == "good") {
        dispatch({
          type: ADD_HERO_TEAM,
          payload: heroe,
        });
      } else {
        dispatch({
          type: ADD_VILLAIN_TEAM,
          payload: heroe,
        });
      }
    }
  };

  const removeHeroTeam = (heroe) => {
    const {
      biography: { alignment },
    } = heroe;

    if (alignment == "good") {
      dispatch({
        type: REMOVE_HERO_TEAM,
        payload: heroe,
      });
    } else {
      dispatch({
        type: REMOVE_VILLAIN_TEAM,
        payload: heroe,
      });
    }
  };

  return (
    <HeroesContext.Provider
      value={{
        team: state.team,
        heroSelect: state.heroSelect,
        countHero: state.countHero,
        countVillain: state.countVillain,
        heroesFound: state.heroesFound,
        handleHero,
        searchHeroURL,
        searchHero,
        addHeroTeam,
        removeHeroTeam,
      }}
    >
      {props.children}
    </HeroesContext.Provider>
  );
};

export default HeroesState;
