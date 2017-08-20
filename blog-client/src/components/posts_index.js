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
        <li className="list-group-item" key={index}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
      );
    })
  }

  render() {
    if (this.props.user[0]) {
      return(
        <div>
          <div>
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h3>Featured Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
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