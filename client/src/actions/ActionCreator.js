import { SELECT_POST, CREATE_POST, EDIT_POST, DELETE_POST } from './ActionTypes'

const selectPost = (selectPost = {}) => ({
    type: SELECT_POST,
    selectPost
});

let nextPost = 0;
const createPost = (content = {}) => ({
    type: CREATE_POST,
    id: nextPost ++,
    ...content
});

const editPost = (content = {}) => ({
    type: EDIT_POST,
    ...content
});

const deletePost = (id = '') => ({
    type: DELETE_POST,
    id
});

export {
    selectPost,
    createPost,
    editPost,
    deletePost
}