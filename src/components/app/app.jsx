import React from "react";
import WelcomePage from "../welcome-page/welcome-page";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const { errorsCount } = props;

  return (
    <WelcomePage errorsCount={errorsCount} />
  );
};

export default App;
