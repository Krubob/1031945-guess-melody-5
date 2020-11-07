import {combineReducers} from "redux";
import {gameProcess} from "./game-process/game-process";
import {gameData} from "./game-data/game-data";
import {login} from "./login/login";

export default combineReducers({
  DATA: gameData,
  GAME: gameProcess,
  LOGIN: login,
});
