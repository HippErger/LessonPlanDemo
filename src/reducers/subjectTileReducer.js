import {combineReducers} from 'redux';
import {
  LOAD_SUBJECT_TILE,
  LOAD_SUBJECT_TILE_SUCCESS,
  LOAD_SUBJECT_TILE_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_SUBJECT_TILE:
      return true;
    case LOAD_SUBJECT_TILE_SUCCESS:
    case LOAD_SUBJECT_TILE_FAILURE:
      return false;
  }
  return state;
}

/* eslint-disable no-unused-vars */
// maybe need to do something with action here: + action.message
function error(state = null, action) {
  return state;
}

function items(state = [], action) {
  switch (action.type) {
    case LOAD_SUBJECT_TILE_SUCCESS:
      return action.receivedData;
    case LOAD_SUBJECT_TILE_FAILURE:
      return [];
  }
  return state;
}

const subjectTileReducer = combineReducers({
  loading,
  error,
  items
});

export default subjectTileReducer;
