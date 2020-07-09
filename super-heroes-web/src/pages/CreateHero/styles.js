import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "../../constants/colors";

export const useStyles = makeStyles({
  appBarTop: {
    backgroundColor: Colors.panelColor,
  },
  link: {
    color: Colors.white,
    textDecoration: "none",
  },
  title: {
    textAlign: "center",
    margin: 20,
  },
});
