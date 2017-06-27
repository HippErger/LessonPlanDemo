import {combineReducers} from 'redux';
import lessonListReducer from './lessonListReducer';
import followingTilesReducer from './followingTilesReducer';
import profileReducer from './profileReducer';
import fanViewReducer from './fanViewReducer';

export default combineReducers({
  lessonListReducer,
  followingTilesReducer,
  profileReducer,
  fanViewReducer,

});
