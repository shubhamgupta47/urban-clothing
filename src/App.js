import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    // Store user's sign-in status here
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null; // To close the subscription to prevent memory leaks

  componentDidMount() {
    /**
     * This is an Open subscription: open msging system b/w our app & firebase.
     *
     * On occurance of any change at the Firebase from any src related to this
     * application, Firebase sends an info that status changed, e.g Sign In or
     * Sign out
     * */
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
