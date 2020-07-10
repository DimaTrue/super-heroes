export const GET_HEROES_INIT = "GET_HEROES_INIT";
export const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS";
export const GET_HEROES_FAILURE = "GET_HEROES_FAILURE";
export const ADD_HERO_INIT = "ADD_HERO_INIT";
export const ADD_HERO_SUCCESS = "ADD_HERO_SUCCESS";
export const ADD_HERO_FAILURE = "ADD_HERO_FAILURE";
export const GET_CURRENT_HERO_DETAILS = "GET_CURRENT_HERO_DETAILS";
export const DELETE_HERO_INIT = "DELETE_HERO_INIT";
export const DELETE_HERO_SUCCESS = "DELETE_HERO_SUCCESS";
export const DELETE_HERO_FAILURE = "DELETE_HERO_FAILURE";

const initialState = {
  isLoading: false,
  superHeroes: [],
  onError: null,
  totalPages: 0,
  currentPage: 1,
  currentHeroDetails: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEROES_INIT:
      return { ...state, isLoading: true };

    case GET_HEROES_SUCCESS:
      return {
        ...state,
        superHeroes: action.heroes,
        totalPages: action.totalPages,
        isLoading: false,
        currentPage: action.currentPage,
      };

    case GET_HEROES_FAILURE:
      return { ...state, onError: action.payload, isLoading: false };

    case ADD_HERO_INIT:
      return { ...state, isLoading: true };

    case ADD_HERO_SUCCESS:
      return { ...state, isLoading: false };

    case ADD_HERO_FAILURE:
      return { ...state, isLoading: false };

    case GET_CURRENT_HERO_DETAILS:
      return {
        ...state,
        currentHeroDetails: state.superHeroes.filter(
          (hero) => hero._id === action.payload
        )[0],
      };

    case DELETE_HERO_INIT:
      return { ...state, isLoading: true };

    case DELETE_HERO_SUCCESS:
      return { ...state, isLoading: false, currentHeroDetails: undefined };

    case DELETE_HERO_FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export const getHeroesInit = (currentPage) => ({
  type: GET_HEROES_INIT,
  payload: currentPage,
});

export const getHeroesSuccess = (heroes, totalPages, currentPage) => ({
  type: GET_HEROES_SUCCESS,
  heroes,
  totalPages,
  currentPage,
});

export const getHeroesError = (payload) => ({
  type: GET_HEROES_FAILURE,
  payload,
});

export const addHeroInit = (payload) => ({
  type: ADD_HERO_INIT,
  payload,
});

export const addHeroSuccess = () => ({
  type: ADD_HERO_SUCCESS,
});

export const addHeroError = (payload) => ({
  type: ADD_HERO_FAILURE,
  payload,
});

export const getCurrentHeroDetails = (id) => ({
  type: GET_CURRENT_HERO_DETAILS,
  payload: id,
});

export const deleteHeroInit = (id) => ({
  type: DELETE_HERO_INIT,
  payload: id,
});

export const deleteHeroSuccess = () => ({
  type: DELETE_HERO_SUCCESS,
});

export const deleteHeroFailure = (err) => ({
  type: DELETE_HERO_FAILURE,
  payload: err,
});
