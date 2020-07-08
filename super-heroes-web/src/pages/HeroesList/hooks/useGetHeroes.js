import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHeroesInit } from "../../../store/reducers/superHeroes";

export const useGetHeroes = () => {
  const isLoading = useSelector((state) => state.superHeroes.isLoading);
  const superHeroes = useSelector((state) => state.superHeroes.superHeroes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroesInit(1));
  }, [dispatch]);

  const getHeroesFromAnotherPage = (page) => dispatch(getHeroesInit(page));

  return {
    isLoading,
    superHeroes,
    getHeroesFromAnotherPage,
  };
};
