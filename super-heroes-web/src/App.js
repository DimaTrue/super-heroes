import React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { HeroesList } from "./pages/HeroesList/HeroesList";
import { CreateHero } from "./pages/CreateHero/CreateHero";
import { HeroDetails } from "./pages/HeroDetails/HeroDetails";
import { EditHero } from "./pages/EditHero/EditHero";
import history from "./history";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HeroesList} />
          <Route path="/create-hero" component={CreateHero} />
          <Route path="/hero/:id" component={HeroDetails} />
          <Route path="/edit-hero" component={EditHero} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
