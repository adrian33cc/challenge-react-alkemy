import {
  ADD_HERO_TEAM,
  ADD_VILLAIN_TEAM,
  HERO_SEARCH,
  HERO_SELECT,
  HERO_URL,
  REMOVE_HERO_TEAM,
  REMOVE_VILLAIN_TEAM,
} from "../types";

const HeroesReducer = (state, action) => {
  switch (action.type) {
    case HERO_SELECT:
    case HERO_URL:
      return {
        ...state,
        heroSelect: action.payload,
      };
    case HERO_SEARCH:
      return {
        ...state,
        heroesFound: action.payload,
      };

    case ADD_HERO_TEAM:
      localStorage.setItem('team', JSON.stringify(state.team))
     
      return {
        ...state,
        team: [...state.team, action.payload],
        countHero: state.countHero - 1,
      };
    case REMOVE_HERO_TEAM:
      localStorage.setItem('team', JSON.stringify(state.team))
    
      return {
        ...state,
        team: state.team.filter((heroe) => heroe !== action.payload),
        countHero: state.countHero + 1,
      };
    case ADD_VILLAIN_TEAM:
      localStorage.setItem('team', JSON.stringify(state.team))
     
      return {
        ...state,
        team: [...state.team, action.payload],
        countVillain: state.countVillain - 1,
      };

    case REMOVE_VILLAIN_TEAM:
      localStorage.setItem('team', JSON.stringify(state.team))
   
      return {
        ...state,
        team: state.team.filter((heroe) => heroe !== action.payload),
        countVillain: state.countVillain + 1,
      };

    default:
      return state;
  }
};

export default HeroesReducer;
