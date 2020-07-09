import React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { HeroesList } from "./pages/HeroesList/HeroesList";
import { CreateHero } from "./pages/CreateHero/CreateHero";
import history from "./history";
import { store } from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HeroesList} />
          <Route path="/create-hero" component={CreateHero} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
