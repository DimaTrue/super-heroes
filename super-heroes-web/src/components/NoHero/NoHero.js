import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./styles";

export const NoHero = () => {
  const classes = useStyles();

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
            <span>Hero was not found</span>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.content}>
            <div className={classes.title}>Sorry, This Hero was not found</div>
            <Link to={"/"} className={classes.link}>
              <Button variant="outlined" color="primary">
                &#8592; go to List of Heroes
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </Box>
  );
};
