import 'isomorphic-fetch';

/* eslint-disable no-unused-vars */
/* ///////////////////////////////////////////////////////////////////////////
                        Create Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Delete Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Delete Lesson Details
/////////////////////////////////////////////////////////////////////////// */


/* ///////////////////////////////////////////////////////////////////////////
                        Load Profile
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';

export function loadProfile() {
  return dispatch => {
    dispatch({
      type: LOAD_PROFILE,
    });

    fetch('/api/teachers')
    .then(result => {
      result.json();
    })
    .then(data => {
      loadProfileSuccess(data);
    })
    .catch(err => {
      loadProfileFailure(err.message);
    });
  };
}

function loadProfileSuccess(receivedData) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    receivedData
  };
}

function loadProfileFailure(errorMessage) {
  return {
    type: LOAD_PROFILE_FAILURE,
    errorMessage
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                        Load FanView of Profile
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_FANVIEW = 'LOAD_FANVIEW';
export const LOAD_FANVIEW_SUCCESS = 'LOAD_FANVIEW_SUCCESS';
export const LOAD_FANVIEW_FAILURE = 'LOAD_FANVIEW_FAILURE';

export function loadFanViewProfile(id) {
  return console.log('receivedData from dispatch', id);

  // dispatch => {
  //   dispatch({
  //     type: LOAD_PROFILE,
  //   });
  //
  //   fetch('/api/teachers/' + id)
  //   .then(result => {
  //     result.json();
  //   })
  //   .then(data => {
  //     loadFanViewProfileSuccess(data);
  //   })
  //   .catch(err => {
  //     loadFanViewProfileFailure(err.message);
  //   });
  // };
}

function loadFanViewProfileSuccess(receivedData) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    receivedData
  };
}

function loadFanViewProfileFailure(errorMessage) {
  return {
    type: LOAD_PROFILE_FAILURE,
    errorMessage
  };
}


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

/* ///////////////////////////////////////////////////////////////////////////
                        Load Subject Tile
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_SUBJECT_TILE = 'LOAD_SUBJECT_TILE';
export const LOAD_SUBJECT_TILE_SUCCESS = 'LOAD_SUBJECT_TILE_SUCCESS';
export const LOAD_SUBJECT_TILE_FAILURE = 'LOAD_SUBJECT_TILE_FAILURE';

export function loadSubjectTile() {
  return dispatch => {
    dispatch({
      type: LOAD_SUBJECT_TILE
    });

    fetch('/api/teachers')
    .then( result => {
      return result.json();
    })
    .then(data => {
      dispatch(loadSubjectTileSuccess(data));
    })
    .catch( err => {
      dispatch(loadSubjectTileFailure(err.message));
    });
  };
}

function loadSubjectTileSuccess(receivedData) {
  return {
    type: LOAD_SUBJECT_TILE_SUCCESS,
    receivedData
  };
}

function loadSubjectTileFailure(errorMessage) {
  return {
    type: LOAD_SUBJECT_TILE_FAILURE,
    errorMessage
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                        Update Lesson Details
/////////////////////////////////////////////////////////////////////////// */
