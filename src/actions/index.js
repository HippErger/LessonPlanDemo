import 'isomorphic-fetch';

/* eslint-disable no-unused-vars */
/* ///////////////////////////////////////////////////////////////////////////
                        Update Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Delete Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Create Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Load One Lesson Details
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_ONE_LESSON = 'LOAD_ONE_LESSON';
export const LOAD_ONE_LESSON_SUCCESS = 'LOAD_ONE_LESSON';
export const LOAD_ONE_LESSON_FAILURE = 'LOAD_ONE_LESSON_FAILURE';

/* ///////////////////////////////////////////////////////////////////////////
                        List All Lesson Details
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_LESSON_LIST = 'LOAD_LESSON_LIST';
export const LOAD_LESSON_LIST_SUCCESS = 'LOAD_LESSON_LIST_SUCCESS';
export const LOAD_LESSON_LIST_FAILURE = 'LOAD_LESSON_LIST_FAILURE';

export function loadLessonList() {
  return dispatch => {
    dispatch({
      type: LOAD_LESSON_LIST,
    });

    fetch('/api/lessonplans')
    .then(result => {
      return result.json();
    })
    .then(data => {
      dispatch(loadLessonListSuccess(data));
    })
    .catch(err => {
      dispatch(loadLessonListFailure(err.message));
      // add in next();
    });
  };
}

function loadLessonListSuccess(receivedData) {
  return {
    type: LOAD_LESSON_LIST_SUCCESS,
    receivedData
  };
}

function loadLessonListFailure(errorMessage) {
  return {
    type: LOAD_LESSON_LIST_FAILURE,
    errorMessage
  };
}
