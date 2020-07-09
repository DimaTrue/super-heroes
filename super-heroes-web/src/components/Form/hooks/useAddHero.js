import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addHeroInit } from "../../../store/reducers/superHeroes";

export const useAddHero = () => {
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [description, setDescription] = useState("");
  const [superPowers, setSuperPowers] = useState("");
  const [phrase, setPhrase] = useState("");
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
        formData.append("image", file[0]);
        formData.append("nickname", nickname);
        formData.append("realName", realName);
        formData.append("description", description);
        formData.append("superPowers", superPowers);
        formData.append("phrase", phrase);
        dispatch(addHeroInit(formData));
        console.log("ENABLED");
      } else {
        console.log("ERROR FORMAT");
        setErrorFormat(true);
      }
    } else {
      const formData = new FormData();
      formData.append("image", file[0]);
      formData.append("nickname", nickname);
      formData.append("realName", realName);
      formData.append("description", description);
      formData.append("superPowers", superPowers);
      formData.append("phrase", phrase);
      dispatch(addHeroInit(formData));
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
