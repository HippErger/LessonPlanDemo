import React, {Component} from 'react';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
// import {
//   loadSubjects
// } from '../actions'

class SubjectThumbnail extends Component {
  componentDidMount() {
    this.props.getSubjects();
  }
  render() {
    return (
      <div>
        <h6> got something working</h6>
      </div>
    );
  }
}

SubjectThumbnail.propTypes = {
  getSubjects: PropTypes.func.isRequired,

};

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    getSubjects: () => {
      console.log('from SubjectThumbnail, 25');
    }
  };
}



export default withRedux(initStore, null, mapDispatchToProps)(SubjectThumbnail);
