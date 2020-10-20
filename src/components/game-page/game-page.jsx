import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {GameType} from '../../const';
import ArtistQuestionPage from '../artist-question-page/artist-question-page';
import GenreQuestionPage from '../genre-question-page/genre-question-page';
import Mistakes from "../mistakes/mistakes";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";

const GenreQuestionPageWrapped = withAudioPlayer(GenreQuestionPage);
const ArtistQuestionPageWrapped = withAudioPlayer(ArtistQuestionPage);

const GamePage = (props) => {
  const {questions, step, resetGame, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();
    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionPageWrapped>
          question={question}
          onAnswer={onUserAnswer}
          <Mistakes count={mistakes}/>
        </ArtistQuestionPageWrapped>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionPageWrapped>
          question={question}
          onAnswer={onUserAnswer}
          <Mistakes count={mistakes}/>
        </GenreQuestionPageWrapped>
      );
    default:
      return <Redirect to="/" />;
  }
};

GamePage.propTypes = {
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  }
});

export {GamePage};
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
