import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import ArtistQuestionPage from '../artist-question-page/artist-question-page';
import GenreQuestionPage from '../genre-question-page/genre-question-page';
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";

const GenreQuestionPageWrapped = withAudioPlayer(GenreQuestionPage);
const ArtistQuestionPageWrapped = withAudioPlayer(ArtistQuestionPage);

class GamePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    const onAnswer = () => {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    };

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionPageWrapped
            question={question}
            onAnswer={onAnswer}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionPageWrapped
            question={question}
            onAnswer={onAnswer}
          />
        );
      default:
        return <Redirect to="/" />;
    }
  }
}

GamePage.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GamePage;
