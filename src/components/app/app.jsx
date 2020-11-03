import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import GamePage from "../game-page/game-page";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {MAX_MISTAKES, AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={({history}) => (
          <WelcomePage
            onPlayBtnClick={() => history.push(AppRoute.GAME)}
            errorsCount={MAX_MISTAKES}
          />
        )}
        />
        <Route exact path={AppRoute.LOGIN} render={({history}) => (
          <AuthPage
            onReplayButtonClick={() => history.push(AppRoute.GAME)}
          />
        )}
        />
        <PrivateRoute exact path={AppRoute.RESULT} render={({history}) => (
          <WinPage
            onReplayButtonClick={() => history.push(AppRoute.GAME)}
          />
        )}
        />
        <Route exact path={AppRoute.LOSE} render={({history}) => (
          <LosePage
            onReplayButtonClick={() => history.push(AppRoute.GAME)}
          />
        )}
        />
        <Route exact path={AppRoute.GAME}>
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
