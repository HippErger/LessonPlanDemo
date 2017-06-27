import {combineReducers} from 'redux';
import {
  LOAD_FANVIEW,
  LOAD_FANVIEW_SUCCESS,
  LOAD_FANVIEW_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_FANVIEW:
      return true;
    case LOAD_FANVIEW_SUCCESS:
    case LOAD_FANVIEW_FAILURE:
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
    case LOAD_FANVIEW_SUCCESS:
      return action.receivedData;
    case LOAD_FANVIEW_FAILURE:
      return [];
  }
  return state;
}

const fanViewReducer = combineReducers({
  loading,
  error,
  item
});

export default fanViewReducer;
