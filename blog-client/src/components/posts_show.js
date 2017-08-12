import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import Moment from 'react-moment';

class PostsShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/" className="btn btn-primary">Return Home</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Category: {post.category}</h6>
        <h6><Moment format="ddd MMMM Do YYYY">{post.created_at}</Moment></h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps is convention 
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);