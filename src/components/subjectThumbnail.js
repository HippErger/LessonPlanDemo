import React from 'react';


function SubjectThumbnail(props) {

  console.log('from subjectsThumbnail, 4', props);
  return (
    <div>
      <h1>This is the subjects thumbnail!!</h1>
    </div>
  );
}

export default SubjectThumbnail;
// import Link from 'next/link';
// // import {initStore} from '../store';
// // import withRedux from 'next-redux-wrapper';
// import PropTypes from 'prop-types';
// // import { action } from '../actions';
//
// class SubjectThumbnail extends Component {
//   constructor(props) {
//     super(props);
//   }
//   // PROFILE_ID = this.props.url.query._id;
//   // componentDidMount() {
//   //   this.props.loadSubjects(this.props.user);
//   // }
//
//   render() {
//
//     const subjectArray = this.props.user.subjects;
//     console.log('from subjectThumbnail, 20', subjectArray);
//
//     // in this map over I need to map over each of the lessons and create a component for them
//     const instancesOfSubjects = subjectArray.map( (instance, index) => {
//       return (
//         <div key={index}>
//           <hr />
//           <h3>{instance.title}</h3>
//           <Link
//             href={{pathname: '/lessonview',
//               query: {_id: instance._id}}} >
//             <button>
//               See All Lessons
//             </button>
//           </Link>
//           <hr />
//         </div>
//       );
//     });
//
//     console.log('from subjectThumbnail,18', subjectArray);
//     return (
//       <div>
//         <h5>Lessons teaches:</h5>
//         {instancesOfSubjects}
//       </div>
//
//     );
//   }
// }
//
// SubjectThumbnail.propTypes = {
//   loadSubjects: PropTypes.func.isRequired,
//   // url: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequireds,
//
// };
//
// /* eslint-disable no-unused-vars */
// // function mapDispatchToProps(dispatch) {
// //   return {
// //     loadSubjects: user => {
// //       console.log('subject tile is loading and calling, 29', user);
// //     }
// //   };
// // }
//
// // export default withRedux(initStore, null, null)(subjectThumbnail);
// export default SubjectThumbnail;
