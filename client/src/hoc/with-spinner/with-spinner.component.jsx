import React from "react";
import Spinner from "../../components/spinner/spinner.component";

const WithSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />;
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
