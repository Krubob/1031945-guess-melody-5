import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import GamePage from "../game-page/game-page";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {MAX_MISTAKES} from "../../const";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <WelcomePage
            onPlayBtnClick={() => history.push(`/game`)}
            errorsCount={MAX_MISTAKES}
          />
        )}
        />
        <Route exact path="/login" render={({history}) => (
          <AuthPage
            onReplayButtonClick={() => history.push(`/game`)}
          />
        )}
        />
        <PrivateRoute exact path={`/result`} render={({history}) => (
          <WinPage
            onReplayButtonClick={() => history.push(`/game`)}
          />
        )}
        />
        <Route exact path="/lose" render={({history}) => (
          <LosePage
            onReplayButtonClick={() => history.push(`/game`)}
          />
        )}
        />
        <Route exact path="/game">
          <GamePage
            errorsCount={MAX_MISTAKES}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
