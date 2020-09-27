import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" isGoogleSignIn onClick={googleSignInStart}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
