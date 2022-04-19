import { combineReducers } from "redux";

import { editReducer } from "./editReducer";
import { filterReducer } from "./filterReducer";
import { jogsReducer } from "./jogsReducer";

export const rootReducer = combineReducers({
  jogs: jogsReducer,
  filter: filterReducer,
  edit: editReducer,
});
