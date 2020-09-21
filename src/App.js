import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";

import ShopPage from "./pages/shop";
import Homepage from "./pages/homepage";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

class App extends Component {
  /**
   * Commented since we are now using redux
   */
  // constructor() {
  //   super();
  //   // Store user's sign-in status here
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null; // To close the subscription to prevent memory leaks

  componentDidMount() {
    /**
     * This is an Open subscription: open msging system b/w our app & firebase.
     *
     * On occurance of any change at the Firebase from any src related to this
     * application, Firebase sends an info that status changed, e.g Sign In or
     * Sign out
     * */
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          /**
           * Commented since we are now using redux
           */
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });
        });
      }
      // this.setState({ currentUser: userAuth });

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
