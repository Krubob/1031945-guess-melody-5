import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../games";
import {GameType} from "../const";

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  incrementMistakes: (question, userAnswer) => {
    let answerIsCorrect = true;
    let payloadValue = Number(answerIsCorrect);

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: payloadValue,
    };
  }
};
