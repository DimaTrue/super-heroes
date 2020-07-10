import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearLoaded } from "store/reducers/superHeroes";

export const useRedirect = () => {
  let history = useHistory();
  const loaded = useSelector((state) => state.superHeroes.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      dispatch(clearLoaded());
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, loaded]);
};
