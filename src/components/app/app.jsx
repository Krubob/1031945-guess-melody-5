import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import ArtistQuestionPage from "../artist-question-page/artist-question-page";
import GenreQuestionPage from "../genre-question-page/genre-question-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage errorsCount={errorsCount} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionPage />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionPage />
        </Route>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <Route exact path="/result">
          <WinPage />
        </Route>
        <Route exact path="/lose">
          <LosePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
