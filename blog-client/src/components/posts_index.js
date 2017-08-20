import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandomPosts, fetchUser } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchRandomPosts();
    this.props.fetchUser();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <div className="featured-container">
            <div className="featured-img">
              <div className="featured-content">
                <span className="meta-cat">
                  <Link to={`/category/${post.category}`}>
                    {post.category}
                  </Link>
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
    if (this.props.user[0]) {
      return(
        <div classNameName="container">
          <div>
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <div className="row">
            {this.renderPosts()}
          </div>
        </div>
      );
    }
    return(
      <div classNameName="container">
        <div className="row">
          {this.renderPosts()}
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

export default connect(mapStateToProps, { fetchRandomPosts, fetchUser })(PostsIndex);