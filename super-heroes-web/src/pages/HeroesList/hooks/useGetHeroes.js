import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHeroesInit } from "../../../store/reducers/superHeroes";

export const useGetHeroes = () => {
  const isLoading = useSelector((state) => state.superHeroes.isLoading);
  const superHeroes = useSelector((state) => state.superHeroes.superHeroes);
  const totalPages = useSelector((state) => state.superHeroes.totalPages);
  const currentPage = useSelector((state) => state.superHeroes.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroesInit(currentPage));
  }, [dispatch, currentPage]);

  const getHeroesFromAnotherPage = (page) => dispatch(getHeroesInit(page));

  return {
    isLoading,
    superHeroes,
    getHeroesFromAnotherPage,
    totalPages,
    currentPage,
  };
};
