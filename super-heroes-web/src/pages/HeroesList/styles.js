import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "constants/colors";

export const useStyles = makeStyles({
  root: {
    maxWidth: "lg",
    marginBottom: 80,
  },
  appBarTop: {
    backgroundColor: Colors.panelColor,
  },
  appBarBottom: {
    top: "auto",
    bottom: 0,
    minHeight: 40,
    backgroundColor: Colors.panelColor,
  },
  link: {
    color: Colors.white,
    textDecoration: "none",
  },
});
