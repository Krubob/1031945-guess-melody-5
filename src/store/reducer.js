import {extend} from "../utils";
import {ActionType} from "./action";
import questions from "../mocks/questions";
import {MAX_MISTAKES} from "../const";

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + 1;
      return extend(state, {
        step: nextStep,
      });
    case ActionType.INCREMENT_MISTAKES:
      let mistakes = state.mistakes + 1;
      if (mistakes >= MAX_MISTAKES) {
        return extend({}, initialState);
      }
      return extend(state, {
        mistakes: state.mistakes + 1,
      });
    case ActionType.RESET_GAME:
      return extend({}, initialState);
    default:
      return state;
  }
};

export {reducer};
