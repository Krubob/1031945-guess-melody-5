import React from "react";
import WelcomePage from "../welcome-page/welcome-page";
import ArtistQuestionPage from "../artist-question-page/artist-question-page";
import GenreQuestionPage from "../genre-question-page/genre-question-page";
import AuthPage from "../auth-page/auth-page";
import WinPage from "../win-page/win-page";
import LosePage from "../lose-page/lose-page";
import GamePage from "../game-page/game-page";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

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
        )
        <Route exact path="/dev-artist" render={() => (
          <ArtistQuestionPage
            question={secondQuestion}
            onAnswer={() => {}}
          />
        )}
        />
        <Route exact path="/dev-genre" render={() => (
          <GenreQuestionPage
            question={firstQuestion}
            onAnswer={() => {}}
          />
        )}
        />
        <Route exact path="/login" component={AuthPage} />
        <Route exact path="/result" component={WinPage} />
        <Route exact path="/lose" component={LosePage} />
        <Route exact path="/game" render={() => (
          <GamePage
            errorsCount={errorsCount}
            questions={questions}
          />
        )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
