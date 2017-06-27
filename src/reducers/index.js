import {combineReducers} from 'redux';
import lessonListReducer from './lessonListReducer';
import subjectTileReducer from './subjectTileReducer';
import profileReducer from './profileReducer';
import fanViewReducer from './fanViewReducer';

export default combineReducers({
  lessonListReducer,
  subjectTileReducer,
  profileReducer,
  fanViewReducer,
  
});
