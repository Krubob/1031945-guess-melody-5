import React from "react";
import PropTypes from 'prop-types';
import WelcomePage from "../welcome-page/welcome-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import GamePage from "../game-page/game-page";
import {fetchQuestionList, checkAuth} from "../../store/api-actions";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {MAX_MISTAKES, AppRoute} from "../../const";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = (props) => {
  const {loadQuestion, checkAuthStatus} = props;

  loadQuestion();
  checkAuthStatus();

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

App.propTypes = {
  loadQuestion: PropTypes.func.isRequired,
  checkAuthStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadQuestion() {
    dispatch(fetchQuestionList());
  },
  checkAuthStatus() {
    dispatch(checkAuth());
  },
});

export {App};
export default connect(null, mapDispatchToProps)(App);
