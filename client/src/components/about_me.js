import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAboutMe, fetchUser } from '../actions';

class AboutMe extends Component {
  componentDidMount() {
    this.props.fetchAboutMe();
    this.props.fetchUser();
    
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
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchAboutMe, fetchUser })(AboutMe);