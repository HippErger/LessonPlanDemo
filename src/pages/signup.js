import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class signUp extends Component {
  constructor() {
    super();
  }

  handleSubmit = () => {
    console.log('form was submitted on signup Page');
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="First Name"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="year"
            placeholder="Last Name"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="make"
            placeholder="Username"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="model"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
        </form>
        <br/>
      </div>
    );
  }
}

export default signUp;
