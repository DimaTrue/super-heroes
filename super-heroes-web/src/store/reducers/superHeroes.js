export const GET_HEROES_INIT = "GET_HEROES_INIT";
export const GET_HEROES_SUCCESS = "GET_HEROES_SUCCESS";
export const GET_HEROES_FAILURE = "GET_HEROES_FAILURE";

const initialState = {
  isLoading: false,
  superHeroes: [],
  onError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEROES_INIT:
      return { ...state, isLoading: true };

    case GET_HEROES_SUCCESS:
      return { ...state, superHeroes: action.payload, isLoading: false };

    case GET_HEROES_FAILURE:
      return { ...state, onError: action.payload, isLoading: false };

    default:
      return state;
  }
}

export const getHeroesInit = () => ({
  type: GET_HEROES_INIT,
});

export const getHeroesSuccess = () => ({
  type: GET_HEROES_SUCCESS,
});

export const getHeroesError = () => ({
  type: GET_HEROES_FAILURE,
});
