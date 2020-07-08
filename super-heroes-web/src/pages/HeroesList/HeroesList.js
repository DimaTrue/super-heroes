import React, { useState } from "react";

import { useGetHeroes } from "./hooks/useGetHeroes";
export const HeroesList = () => {
  const { isLoading, superHeroes, getHeroesFromAnotherPage } = useGetHeroes();

  return (
    <div>
      <span>HeroesList</span>
      <button onClick={() => getHeroesFromAnotherPage(2)}>
        <span>PAGE</span>
      </button>
    </div>
  );
};
