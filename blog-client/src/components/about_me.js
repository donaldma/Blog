import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAboutMe } from '../actions';

class AboutMe extends Component {
  componentDidMount() {
    this.props.fetchAboutMe();
  }

  renderAboutMe() {
    return _.map(this.props.posts, post => {
      return (
        <p key={post.id}>{post.about}</p>
      );
    })
  }

  render() {
    return(
      <div>
        <h3>About Me</h3>
        {this.renderAboutMe()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchAboutMe })(AboutMe);