import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

function comments(state =[], action) {
  switch(action) {
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
      const newState = state;
      (newState.find(comment => comment.id === action.id)).text = action.text;
      return newState;

    case THUMB_UP_COMMENT:
      const newState = state;
      (newState.find(comment => comment.id === action.id)).votes++;
      return newState;

    case THUMB_DOWN_COMMENT:
      const newState = state;
      (newState.find(comment => comment.id === action.id)).votes--;
      return newState;

    default:
      return state;
  }
}
