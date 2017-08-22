import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { fetchPost, deletePost, fetchPosts, fetchUser, fetchSidebar } from '../actions';
import Moment from 'react-moment';
import ReactLoading from 'react-loading';
import PostsEdit from './posts_edit';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false,
      post: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ post: nextProps.post })
  }
  
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchUser();
    this.props.fetchSidebar();
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
    const { sidebar } = this.props;
    const key = Object.keys(sidebar.data)
    const obj = sidebar.data[key]
    
    if(sidebar.data.length === 0) {
      return (
        <div>
          <ReactLoading type="spinningBubbles" color="#444" />
        </div>
      );
    }
    
    if (this.state.isEditing) {
      return (
        <div>
          <PostsEdit post={post} onEditClick={this.onEditClick}/>
        </div>
      );
    }

    if(this.props.user[0]) {
      return (
        <div className="container">
          <button className="btn btn-primary" onClick={this.onEditClick}> 
            Edit Post
          </button>
          <button className="btn btn-danger" onClick={this.onDeleteClick}>
            Delete Post
          </button>
          <div className="row">          
            <div className="col-sm-8">
              <h6 className="about-me-title">
                <span className="post-sub">
                  <Moment format="MMMM D, YYYY">{post.created_at}</Moment>
                </span>
              </h6>          
              <h3 className="post-title">{post.title}</h3>
              <img src={post.photo_url} className="post-img"/>
              <p>{post.content}</p>
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
    return (
      <div className="container">
        <div className="row">        
          <div className="col-sm-8">
            <h6 className="about-me-title">
              <span className="post-sub">
                <Moment format="MMMM D, YYYY">{post.created_at}</Moment>
              </span>
            </h6>
            <h3 className="post-title">{post.title}</h3>
            <img src={post.photo_url} className="post-img"/>        
            <p>{post.content}</p>
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

// ownProps is convention 
function mapStateToProps(state, ownProps) {
  return { 
    post: state.posts[ownProps.match.params.id],
    user: state.user,
    sidebar: state.sidebar
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost, fetchPosts, fetchUser, fetchSidebar })(PostsShow);