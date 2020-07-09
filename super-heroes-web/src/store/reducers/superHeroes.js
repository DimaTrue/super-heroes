export const GET_HEROES_INIT = "GET_HEROES_INIT";
export const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS";
export const GET_HEROES_FAILURE = "GET_HEROES_FAILURE";

const initialState = {
  isLoading: false,
  superHeroes: [],
  onError: null,
  totalPages: 0,
  currentPage: 1,
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
