import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import GamePage from "../game-page/game-page";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <WelcomePage
            onPlayBtnClick={() => history.push(`/game`)}
            errorsCount={errorsCount}
          />
        )}
        />
        <Route exact path="/login" component={AuthPage} />
        <Route exact path="/result" component={WinPage} />
        <Route exact path="/lose" component={LosePage} />
        <Route exact path="/game">
          <GamePage
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
