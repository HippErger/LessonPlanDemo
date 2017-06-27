import {combineReducers} from 'redux';
import lessonListReducer from './lessonListReducer';
import subjectTileReducer from './subjectTileReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  lessonListReducer,
  subjectTileReducer,
  profileReducer,

});
