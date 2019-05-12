import {
  SELECT_POST
} from "../actions/ActionTypes";

const selectPost = (state = {}, action) => {
  switch (action.type) {
    case SELECT_POST:
      return action.selectPost;
    default:
      return state;
  }
};

export default selectPost;
