import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vh",
  },
  form: {},
  input: {
    display: "flex",
    margin: 20,
  },
  fileInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});
