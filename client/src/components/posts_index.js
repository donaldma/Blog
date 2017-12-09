import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { fetchRandomPosts, fetchUser, fetchMostRecent } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchRandomPosts();
    this.props.fetchUser();
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
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
  
  render() {
    
    const { recent } = this.props;

    if(!recent) {
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
              <div className="recent-post">
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
          <div className="col-sm-12">
            <div className="recent-post">
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
    recent: state.recent[0]
  }
}

export default connect(mapStateToProps, { fetchRandomPosts, fetchUser, fetchMostRecent })(PostsIndex);