import React from "react";
import { CustomButtonContainer } from "./button.styles";

const Button = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default Button;
