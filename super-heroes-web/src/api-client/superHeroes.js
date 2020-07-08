import axios from "axios";

import { BASE_URL, SUPER_HEROES_URL } from "../constants/urls";
import { HEROES_PER_PAGE } from "../constants/constants";

export const getHeroesRequest = (currentPage) => {
  return axios(`${BASE_URL}${SUPER_HEROES_URL}`, {
    params: {
      page: currentPage,
      perPage: HEROES_PER_PAGE,
    },
  });
};
