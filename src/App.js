import React from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
};

export default App;
