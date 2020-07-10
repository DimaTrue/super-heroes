import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./styles";
import { deleteHeroInit } from "../../store/reducers/superHeroes";
import { defaultImg } from "../../constants/constants";

export const HeroDetails = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentHeroDetails = useSelector(
    (state) => state.superHeroes.currentHeroDetails
  );

  if (currentHeroDetails) {
    const {
      _id,
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    } = currentHeroDetails;

    const imageSource =
      Images && Images[0] && Images[0].length ? Images[0] : defaultImg;

    return (
      <>
        <AppBar position="static" className={classes.appBarTop}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Link to={"/"} className={classes.link}>
                <Button variant="outlined" color="inherit">
                  &#8592; go to List of Heroes
                </Button>
              </Link>
              <span>{nickname}</span>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => dispatch(deleteHeroInit(_id))}
              >
                Delete Hero
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            <Paper elevation={3} className={classes.mainInfoBlock}>
              <ListItem>
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
                  <span className={classes.paperTitle}>{nickname}</span>
                  <ListItemText primary={real_name} />
                </div>
              </ListItem>
            </Paper>
            <Paper elevation={3} className={classes.descriptionBlock}>
              <div>
                <span className={classes.paperTitle}>Description: </span>
              </div>
              <div className={classes.paperContent}>
                <span>{origin_description}</span>
              </div>
            </Paper>
            <Paper elevation={3} className={classes.descriptionBlock}>
              <div>
                <span className={classes.paperTitle}>Super Powers: </span>
              </div>
              <div className={classes.paperContent}>
                <span>{superpowers}</span>
              </div>
            </Paper>
            <Paper elevation={3} className={classes.descriptionBlock}>
              <div>
                <span className={classes.paperTitle}>Catch Phrase: </span>
              </div>
              <div className={classes.paperContent}>
                <span>{catch_phrase}</span>
              </div>
            </Paper>
            {Images &&
              Images.length &&
              Images.map((img, i) => {
                return (
                  <Paper elevation={3} className={classes.imageGalleryBlock}>
                    <img
                      src={img}
                      alt={`${nickname}-${i}`}
                      className={classes.imageGallery}
                    />
                  </Paper>
                );
              })}
          </Grid>
        </Grid>
      </>
    );
  }
  history.push("/");
  return <div />;
};
