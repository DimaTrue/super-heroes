import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import { DESCRIPTION_LENGTH, defaultImg } from "../../constants/constants";
import { useStyles } from "./styles";
import { getCurrentHeroDetails } from "../../store/reducers/superHeroes";

export const HeroItem = ({ _id, nickname, Images, origin_description }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const imageSource =
    Images && Images[0] && Images[0].length ? Images[0] : defaultImg;

  return (
    <Link
      className={classes.link}
      to={`/hero/${_id}`}
      onClick={() => dispatch(getCurrentHeroDetails(_id))}
    >
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
    </Link>
  );
};
