import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAboutMe, fetchUser, fetchSidebar } from '../actions';

class AboutMe extends Component {
  componentDidMount() {
    this.props.fetchAboutMe();
    this.props.fetchUser();
    this.props.fetchSidebar();    
    
  }

  renderAboutMe() {
    return _.map(this.props.posts, post => {
      return (
        <p key={post.id}>{post.about}</p>
      );
    })
  }

  render() {
    const { user } = this.props;
    const { sidebar } = this.props;
    const key = Object.keys(sidebar.data)
    const obj = sidebar.data[key]
    
    if(sidebar.data.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if(this.props.user[0]) {
      return(
        <div>
          <h3>About Me</h3>
          <img src={user[0].avatar_url} />
          {this.renderAboutMe()}
        </div>
      );
    }

    return(
      <div>
        <h3>About Me</h3>
        <img src={obj.avatar_url} />        
        {this.renderAboutMe()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    posts: state.posts, 
    user: state.user,
    sidebar: state.sidebar
  }
}

export default connect(mapStateToProps, { fetchAboutMe, fetchUser, fetchSidebar })(AboutMe);