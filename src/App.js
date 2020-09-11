import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const Hats = () => <div>Hats</div>;

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop/hats" component={Hats} />
    </div>
  );
};

export default App;
