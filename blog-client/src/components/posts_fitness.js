import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { fetchPostsFitness, fetchUser, fetchSidebar } from '../actions';

class PostsFitness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 4
    }
  }

  componentDidMount() {
    this.props.fetchPostsFitness(this.state.limit);
    this.props.fetchUser();
    this.props.fetchSidebar();        
  }

  loadMore = () => {
    if(_.size(this.props.posts) < this.state.limit) {
      alert('All posts have been loaded!')
    }
    
    this.setState({
      limit: this.state.limit + 4 
    }, () => {
      this.props.fetchPostsFitness(this.state.limit);
    })
  }
  
  renderPosts() {
    const orderedPosts = _.orderBy(this.props.posts, 'created_at', 'desc')
    return _.map(orderedPosts, (post, index) => {
      const imgStyle = {
        backgroundImage: `url(${post.photo_url})`
      }
      return (
          <div className="col-sm-6 category-row" key={index}>
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
    const { sidebar } = this.props;
    const key = Object.keys(sidebar.data);
    const obj = sidebar.data[key];

    if(sidebar.data.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }

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
              <h3 className="category-title">Fitness</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {this.renderPosts()}
            </div>
            <div>
              <button className="main-button" onClick={this.loadMore}>Load More</button>
            </div>
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
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="category-title-container">
              <h3 className="category-title">Fitness</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {this.renderPosts()}
            </div>
            <div>
              <button className="main-button" onClick={this.loadMore}>Load More</button>
            </div>
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
    sidebar: state.sidebar    
  }
}

export default connect(mapStateToProps, { fetchPostsFitness, fetchUser, fetchSidebar })(PostsFitness);