import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "../../constants/colors";

export const useStyles = makeStyles({
  root: {
    marginTop: "30vh",
  },
  content: {
    padding: 20,
  },
  appBarTop: {
    backgroundColor: Colors.panelColor,
  },
  link: {
    color: Colors.white,
    textDecoration: "none",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
});
