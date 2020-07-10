import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { Form } from "components/Form/Form";

export const EditHero = () => {
  let history = useHistory();
  const classes = useStyles();
  const currentHeroDetails = useSelector(
    (state) => state.superHeroes.currentHeroDetails
  );

  if (!currentHeroDetails) {
    history.push("/");
    return <div />;
  }

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
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
            <span>EDIT HERO</span>
          </Grid>
        </Toolbar>
      </AppBar>
      <span className={classes.title}>EDIT HERO</span>
      <Form hero={currentHeroDetails} />
    </Box>
  );
};
