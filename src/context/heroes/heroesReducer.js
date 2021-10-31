import { ADD_HERO_TEAM, ADD_VILLAIN_TEAM, HERO_SEARCH, HERO_SELECT, HERO_URL } from "../types";


const HeroesReducer = (state,action) => {
  switch(action.type){

    case HERO_SELECT:
    case HERO_URL:
      return {
        ...state, 
        heroSelect: action.payload,
      }
    case HERO_SEARCH:
      return{
        ...state,
        heroesFound: action.payload,
      }
    
    case ADD_HERO_TEAM:
      return{
        ...state,
        team:[...state.team, action.payload],
        countHero: state.countHero-1
      }
    case ADD_VILLAIN_TEAM:
      return{
        ...state,
        team:[...state.team, action.payload],
        countVillain: state.countVillain-1
      }

    default:
      return state;
  }
}
 
export default HeroesReducer;