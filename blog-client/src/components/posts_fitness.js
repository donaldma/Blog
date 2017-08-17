import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsFitness, fetchUser } from '../actions';

class PostsFitness extends Component {
  componentDidMount() {
    this.props.fetchPostsFitness();
    this.props.fetchUser();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
      );
    })
  }

  render() {
    if(this.props.user[0]) {
      return(
        <div>
          <div>
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h3>Fitness</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }
    return(
      <div>
        <h3>Fitness</h3>
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

export default connect(mapStateToProps, { fetchPostsFitness, fetchUser })(PostsFitness);