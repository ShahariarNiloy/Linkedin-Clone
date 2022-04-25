import React from "react";
import { SET_USER } from "../actions/actionsTypes";
const INITIAL_STATE = {
  user: null,
};
export const userReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
