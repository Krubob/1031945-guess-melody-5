import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {GameType} from '../../const';
import Mistakes from "../mistakes/mistakes";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import ArtistQuestionPage from '../artist-question-page/artist-question-page';
import GenreQuestionPage from '../genre-question-page/genre-question-page';
import {ArtistPropTypes, GenrePropTypes} from "../../propTypes";

const GenreQuestionPageWrapped = withAudioPlayer(withUserAnswer(GenreQuestionPage));
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
        <ArtistQuestionPageWrapped
          question={question}
          onAnswer={onUserAnswer}>
          <Mistakes count={mistakes}/>
        </ArtistQuestionPageWrapped>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionPageWrapped
          question={question}
          onAnswer={onUserAnswer}>
          <Mistakes count={mistakes}/>
        </GenreQuestionPageWrapped>
      );
    default:
      return <Redirect to="/" />;
  }
};

GamePage.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([ArtistPropTypes, GenrePropTypes]).isRequired
  ),
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(question, answer));
  }
});

export {GamePage};
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
