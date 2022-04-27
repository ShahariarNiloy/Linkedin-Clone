import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";

import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer,
});
