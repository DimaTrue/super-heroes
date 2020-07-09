import axios from "axios";

import { BASE_URL, SUPER_HEROES_URL, NEW_HERO } from "../constants/urls";
import { HEROES_PER_PAGE } from "../constants/constants";

export const getHeroesRequest = (currentPage) => {
  return axios(`${BASE_URL}${SUPER_HEROES_URL}`, {
    params: {
      page: currentPage,
      perPage: HEROES_PER_PAGE,
    },
  });
};

export const addHeroRequest = (formData) => {
  return axios({
    method: "post",
    url: `${BASE_URL}${SUPER_HEROES_URL}${NEW_HERO}`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
