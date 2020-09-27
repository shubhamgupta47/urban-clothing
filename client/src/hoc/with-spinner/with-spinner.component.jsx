import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};
/**
 * Another way
 */
// const WithSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrapperComponent {...otherProps} />
//   );
// };

export default WithSpinner;
