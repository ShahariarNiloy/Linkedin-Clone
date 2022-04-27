import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionsTypes";

export const initial_state = {
  articles: [],
  loading: false,
};

const articlesReducer = (state = initial_state, action: any) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
