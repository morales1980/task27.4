import uuid from uuid;

//action types
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT; = 'THUMB_DOWN_COMMENT';

//action creators
function addComment(comment) {
  return {
    type: ADD_COMMENT,
    text: comment,
    id: uuid.v4()
  }
}

function editComment(id, comment) {
  return {
    type: EDIT_COMMENT,
    text: comment,
    id: id
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

function thumbsUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  }
}

function thumbsDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
}
