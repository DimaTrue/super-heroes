import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addHeroInit, editHeroInit } from "store/reducers/superHeroes";

export const useFormHero = (hero) => {
  const [nickname, setNickname] = useState(hero ? hero.nickname : "");
  const [realName, setRealName] = useState(hero ? hero.real_name : "");
  const [description, setDescription] = useState(
    hero ? hero.origin_description : ""
  );
  const [superPowers, setSuperPowers] = useState(hero ? hero.superpowers : "");
  const [phrase, setPhrase] = useState(hero ? hero.catch_phrase : "");
  const [errorFormat, setErrorFormat] = useState(false);
  const isLoading = useSelector((state) => state.superHeroes.isLoading);
  const dispatch = useDispatch();

  const handleRequest = () => {
    const file = document.getElementById("inputUploadImage").files;
    if (file && file[0] && file[0].name) {
      const dotIndex = file[0].name.lastIndexOf(".");
      if (
        file[0].name.slice(dotIndex) === ".jpg" ||
        file[0].name.slice(dotIndex) === ".png"
      ) {
        const formData = new FormData();
        hero && formData.append("heroId", hero._id);
        formData.append("image", file[0]);
        formData.append("nickname", nickname);
        formData.append("real_name", realName);
        formData.append("origin_description", description);
        formData.append("superpowers", superPowers);
        formData.append("catch_phrase", phrase);
        hero
          ? dispatch(editHeroInit(formData))
          : dispatch(addHeroInit(formData));
        console.log("ENABLED");
      } else {
        console.log("ERROR FORMAT");
        setErrorFormat(true);
      }
    } else {
      const formData = new FormData();
      hero && formData.append("heroId", hero._id);
      formData.append("image", file[0]);
      formData.append("nickname", nickname);
      formData.append("real_name", realName);
      formData.append("origin_description", description);
      formData.append("superpowers", superPowers);
      formData.append("catch_phrase", phrase);
      hero ? dispatch(editHeroInit(formData)) : dispatch(addHeroInit(formData));
      console.log("enabled");
    }
  };

  return {
    nickname,
    setNickname,
    realName,
    setRealName,
    description,
    setDescription,
    superPowers,
    setSuperPowers,
    phrase,
    setPhrase,
    handleRequest,
    errorFormat,
    setErrorFormat,
    isLoading,
  };
};
