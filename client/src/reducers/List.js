import { CREATE_POST, EDIT_POST, DELETE_POST } from "../actions/ActionTypes";
import _ from 'lodash';
const list = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [
        ...state,
        {
          ...action
        }
      ];
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          post = action;
        }
        return post;
      });
    case DELETE_POST:
      return _.reject(state, (post) => { return post.id === action.id; });
    default:
      return state;
  }
};

export default list;
