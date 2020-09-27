import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup";

const SignInAndSignUpPage = () => {
  return (
    <div className="wrapper">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
