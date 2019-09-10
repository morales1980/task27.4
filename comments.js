import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

function comments(state =[], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
        },
        ...state
      ];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      const newState = [...state];
      (newState.find(comment => comment.id === action.id)).text = action.text;
      return newState;

    case THUMB_UP_COMMENT:
      const newState = [...state];
      (newState.find(comment => comment.id === action.id)).votes++;
      return newState;

    case THUMB_DOWN_COMMENT:
      const newState = [...state];
      (newState.find(comment => comment.id === action.id)).votes--;
      return newState;

    default:
      return state;
  }
}
