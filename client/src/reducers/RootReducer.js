import { combineReducers } from 'redux';
import selectPost from './SelectPost';
import list from './List';
export default combineReducers({
    selectPost,
    list
});