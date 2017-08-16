import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost, fetchPosts } from '../actions';
import Moment from 'react-moment';
import PostsEdit from './posts_edit';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false,
      post: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ post: nextProps.post })
  }

  componentDidMount(){
    this.props.fetchPosts();        
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  onEditClick = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>;
    }

    if (this.state.isEditing) {
      return (
        <div>
          <PostsEdit post={post} onEditClick={this.onEditClick}/>
        </div>
      );
    }

    return (
      <div>
        <div>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div><br />
        <button className="btn btn-primary" onClick={this.onEditClick}> 
          Edit Post
        </button>
        <button className="btn btn-danger" onClick={this.onDeleteClick}>
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

export default connect(mapStateToProps, { fetchPost, deletePost, fetchPosts })(PostsShow);