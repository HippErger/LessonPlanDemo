import React, {Component} from 'react';
import Link from 'next/link';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
// import { action } from '../actions';

class subjectThumbnail extends Component {
  constructor(props) {
    super(props);
  }
  // PROFILE_ID = this.props.url.query._id;
  componentDidMount() {
    this.props.loadSubjects(this.props.user);
  }

  render() {
    console.log('from subjectThumbnail,18', this.props.user);
    return (
    <Link href="/fanview">
      <div>
        <h4>Username</h4>
        <h5>Subjects</h5>
        <h6>Years VAR </h6>
        <span>Followers</span>
        &nbsp; &nbsp;
        <span>Avatar</span>
      </div>
    </Link>

    );
  }
}

subjectThumbnail.propTypes = {
  loadSubjects: PropTypes.func.isRequired,
  // url: PropTypes.object.isRequired,
  user: PropTypes.object.isRequireds

};

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    loadSubjects: user => {
      console.log('subject tile is loading and calling, 29', user);
    }
  };
}

export default withRedux(initStore, null, mapDispatchToProps)(subjectThumbnail);
