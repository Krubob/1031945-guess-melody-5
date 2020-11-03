import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {incrementStep, incrementMistakes, resetGame} from "../../store/action";
import {GameType, MAX_MISTAKES} from '../../const';
import Mistakes from "../mistakes/mistakes";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import ArtistQuestionPage from '../artist-question-page/artist-question-page';
import GenreQuestionPage from '../genre-question-page/genre-question-page';
import {ArtistPropTypes, GenrePropTypes} from "../../propTypes";

const GenreQuestionPageWrapped = withAudioPlayer(withUserAnswer(GenreQuestionPage));
const ArtistQuestionPageWrapped = withAudioPlayer(ArtistQuestionPage);

const GamePage = (props) => {
  const {questions, step, onUserAnswer, mistakes} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKES) {
    return (
      <Redirect to="/lose" />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionPageWrapped
          key={step}
          question={question}
          onAnswer={onUserAnswer}>
          <Mistakes count={mistakes}/>
        </ArtistQuestionPageWrapped>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionPageWrapped
          key={step}
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
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistakes(question, answer));
  }
});

export {GamePage};
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
