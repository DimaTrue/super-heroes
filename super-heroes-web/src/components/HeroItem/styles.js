import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "md",
    margin: 10,
  },
  textArea: {
    flex: 1,
    flexDirection: "row",
    margin: 30,
  },
  imageBlock: {
    padding: 25,
  },
  image: {
    borderRadius: 100,
    objectFit: "cover",
  },
  nickName: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
