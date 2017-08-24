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
    const key = Object.keys(sidebar.data);
    const obj = sidebar.data[key];
    
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
          <div className="row">
            <div className="col-sm-12">
              <div className="category-title-container">
                <h3 className="category-title">About Me</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 aboutme-container">
              <img src={user[0].avatar_url} className="aboutme-img pull-left"/>
              <div>{this.renderAboutMe()}</div>
            </div>
          </div>
        </div>
      );
    }

    return(
      <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="category-title-container">
                <h3 className="category-title">About Me</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 aboutme-container">
              <img src={obj.avatar_url} className="aboutme-img pull-left"/>
              <div>{this.renderAboutMe()}</div>
            </div>
          </div>
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