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
        <Route exact path="/" render={()=> <WelcomePage errorsCount={errorsCount} />} />
        <Route exact path="/dev-artist" component={ArtistQuestionPage} />
        <Route exact path="/dev-genre" component={GenreQuestionPage} />
        <Route exact path="/login" component={AuthPage} />
        <Route exact path="/result" component={WinPage} />
        <Route exact path="/lose" component={LosePage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
