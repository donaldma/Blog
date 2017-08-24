import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { fetchRandomPosts, fetchUser, fetchSidebar, fetchMostRecent } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchRandomPosts();
    this.props.fetchUser();
    this.props.fetchSidebar();    
    this.props.fetchMostRecent();
  }

  shorten = (str) => {
    if(str.length > 160) {
      return (str.substring(0, 160) + '...');
    }
    return str;
  }

  renderPosts() {
    return _.map(this.props.posts, (post, index) => {
      const imgStyle = {
        backgroundImage: `url(${post.photo_url})`
      }
      return (
        <div className="col-sm-4" key={index}>
          <div className="featured-container">
            <div className="featured-img" style={imgStyle}>
              <div className="featured-content">
                <span className="meta-cat">
                  <Moment format="MMMM D, YYYY">{post.created_at}</Moment>
                </span>
                <h3>
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <span className="meta-cat">In&nbsp;
                  <Link to={`/category/${post.category}`}>
                    {post.category}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
  
  render() {
    
    const { sidebar } = this.props;
    const key = Object.keys(sidebar.data);
    const obj = sidebar.data[key];
    const { recent } = this.props;

    if(sidebar.data.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if(!recent[0]) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (this.props.user[0]) {
      return(
        <div className="container">
          <div style={{marginBottom: '20px'}}>
            <Link className="main-button" to="/posts/new">
              New Post
            </Link>
          </div>
          <div className="row">
            {this.renderPosts()}
          </div>
          <div className="row">
            <div className="col-sm-8">
              <h6 className="about-me-title">
                <span className="post-sub">
                  <Moment format="MMMM D, YYYY">{recent[0].created_at}</Moment>
                </span>
              </h6>
              <h3 className="post-title">{recent[0].title}</h3>
              <img src={recent[0].photo_url} className="post-img"/> 
              <p>{this.shorten(recent[0].content)}</p>
              <Link className="main-button" to={`/posts/${recent[0].id}`}>
                read more
              </Link>
            </div>
            <div className="col-sm-4 about-me-container">
              <h3 className="about-me-title">
                <span className="post-sub">About Me</span>
              </h3>
              <img src={this.props.user[0].avatar_url} className="post-img"/>
              <p>{this.props.user[0].short_about}</p>
              <h3 className="about-me-title">
                <span className="post-sub">Instagram</span>
              </h3>
            </div>
          </div>
        </div>
      );
    }
    return(
      <div className="container">
        <div className="row">
          {this.renderPosts()}
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h6 className="about-me-title">
              <span className="post-sub">
                <Moment format="MMMM D, YYYY">{recent[0].created_at}</Moment>
              </span>
            </h6>
            <h3 className="post-title">{recent[0].title}</h3>
            <img src={recent[0].photo_url} className="post-img"/> 
            <p>{this.shorten(recent[0].content)}</p>
            <Link className="main-button" to={`/posts/${recent[0].id}`}>
              read more
            </Link>    
          </div>
          <div className="col-sm-4 about-me-container">
            <h3 className="about-me-title">
              <span className="post-sub">About Me</span>
            </h3>
            <img src={obj.avatar_url} className="post-img"/>
            <p>{obj.short_about}</p>
            <h3 className="about-me-title">
              <span className="post-sub">Instagram</span>
            </h3>
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
    sidebar: state.sidebar,
    recent: state.recent
  }
}

export default connect(mapStateToProps, { fetchRandomPosts, fetchUser, fetchSidebar, fetchMostRecent })(PostsIndex);