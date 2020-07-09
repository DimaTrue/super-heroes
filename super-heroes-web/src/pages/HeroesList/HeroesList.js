import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { useGetHeroes } from "./hooks/useGetHeroes";
import { HeroItem } from "../../components/HeroItem/HeroItem";
import { Loading } from "../../components/Loading/Loading";
import { useStyles } from "./styles";

export const HeroesList = () => {
  const {
    isLoading,
    superHeroes,
    getHeroesFromAnotherPage,
    totalPages,
    currentPage,
  } = useGetHeroes();
  const classes = useStyles();

  const handleChange = (event, value) => getHeroesFromAnotherPage(value);

  return isLoading ? (
    <Loading />
  ) : (
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
            <span>SUPER HEROES</span>
            <Link to={"/create-hero"} className={classes.link}>
              <Button variant="outlined" color="inherit">
                Add New Hero
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>
        <List dense className={classes.root}>
          {superHeroes.length &&
            superHeroes.map((hero) => <HeroItem key={hero._id} {...hero} />)}
        </List>
      </Container>
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Pagination
              count={totalPages}
              onChange={handleChange}
              page={currentPage}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
