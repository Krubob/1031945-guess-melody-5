import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  questions: [],
  loadingIndicator: ``,
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS_SUCCESS:
      return extend(state, {
        questions: action.payload,
        loadingIndicator: action.status,
      });
  }

  return state;
};

export {gameData};
