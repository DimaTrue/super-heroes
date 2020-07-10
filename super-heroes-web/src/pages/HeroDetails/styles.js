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
  mainInfoBlock: {
    marginTop: 10,
  },
  imageBlock: {
    padding: 25,
  },
  image: {
    borderRadius: 100,
    objectFit: "cover",
  },
  textArea: {
    flex: 1,
    margin: 30,
  },
  paperTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  descriptionBlock: {
    marginTop: 10,
    padding: 10,
  },
  paperContent: {
    marginTop: 20,
    fontSize: 18,
  },
  imageGalleryBlock: {
    marginTop: 10,
    padding: 10,
  },
  imageGallery: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
