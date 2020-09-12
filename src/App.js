import React from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
