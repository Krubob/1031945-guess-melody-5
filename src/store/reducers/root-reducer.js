import {combineReducers} from "redux";
import {gameProcess} from "./game-process/game-process";
import {gameData} from "./game-data/game-data";
import {login} from "./login/login";

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  LOGIN: `LOGIN`,
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: login,
});
