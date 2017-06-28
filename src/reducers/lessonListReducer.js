import {combineReducers} from 'redux';
import {
  LOAD_LESSON_LIST,
  LOAD_LESSON_LIST_SUCCESS,
  LOAD_LESSON_LIST_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_LESSON_LIST:
      return true;
    case LOAD_LESSON_LIST_SUCCESS:
    case LOAD_LESSON_LIST_FAILURE:
      return false;
  }
  return state;
}

/* eslint-disable no-unused-vars */
// maybe need to do something with action here: + action.message
function error(state = null, action) {
  return state;
}

function item(state = {}, action) {
  switch (action.type) {
    case LOAD_LESSON_LIST_SUCCESS:
      return action.receivedData;
    case LOAD_LESSON_LIST_FAILURE:
      return {};
  }
  return state;
}

const lessonListReducer = combineReducers({
  loading,
  error,
  item
});

export default lessonListReducer;
