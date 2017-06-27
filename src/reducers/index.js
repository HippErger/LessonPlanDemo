import {combineReducers} from 'redux';
import lessonListReducer from './lessonListReducer';
import subjectTileReducer from './subjectTileReducer';

export default combineReducers({
  lessonListReducer,
  subjectTileReducer,

});
