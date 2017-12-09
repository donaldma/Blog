import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { fetchPosts, fetchUser } from '../actions';

class PostsAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 4,
      disabled: false
    }
  }

  componentDidMount() {
    this.props.fetchPosts(this.state.limit);
    this.props.fetchUser();
  }
  
  componentWillReceiveProps(nextProps) {
    if(_.size(nextProps.posts) % 4 === 0 && this.props.posts !== nextProps.posts && _.size(nextProps.posts) < this.state.limit) {
      alert('All posts have been loaded!');
      this.setState({ disabled: true }); 
    }
  }

  loadMore = () => {
    if(_.size(this.props.posts) < this.state.limit) {
      alert('All posts have been loaded!');
      this.setState({ disabled: true }); 
    }
    
    this.setState({
      limit: this.state.limit + 4 
    }, () => {
      this.props.fetchPosts(this.state.limit);
    })
  }
  
  renderPosts() {
    const orderedPosts = _.orderBy(this.props.posts, 'created_at', 'desc')
    return _.map(orderedPosts, (post, index) => {
      const imgStyle = {
        backgroundImage: `url(${post.photo_url})`
      }
      return (
          <div className="col-sm-4 category-row" key={index}>
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

    if(this.props.user[0]) {
      return(
      <div>
        <div style={{marginBottom: '20px'}}>
          <Link className="main-button" to="/posts/new">
            New Post
          </Link>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="category-title-container">
              <h3 className="category-title">All Posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              {this.renderPosts()}
            </div>
            <div>
              <button className="main-button" onClick={this.loadMore} disabled={this.state.disabled}>Load More</button>
            </div>
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
              <h3 className="category-title">All Posts</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              {this.renderPosts()}
            </div>
            <div>
              <button className="main-button" onClick={this.loadMore} disabled={this.state.disabled}>Load More</button>
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
    user: state.user  
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostsAll);