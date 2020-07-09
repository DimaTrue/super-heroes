import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import { DESCRIPTION_LENGTH, defaultImg } from "../../constants/constants";
import { useStyles } from "./styles";

export const HeroItem = ({ nickname, Images, origin_description }) => {
  const classes = useStyles();

  const imageSource =
    Images && Images[0] && Images[0].length ? Images[0] : defaultImg;

  return (
    <Paper elevation={3} className={classes.root}>
      <ListItem button>
        <div className={classes.imageBlock}>
          <img
            alt={nickname}
            src={imageSource}
            className={classes.image}
            width="120vw"
            height="120vw"
          />
        </div>
        <div className={classes.textAreaa}>
          <span className={classes.nickName}>{nickname}</span>
          <ListItemText
            primary={
              origin_description.length > DESCRIPTION_LENGTH
                ? origin_description.slice(0, DESCRIPTION_LENGTH) + "..."
                : origin_description
            }
          />
        </div>
      </ListItem>
    </Paper>
  );
};
