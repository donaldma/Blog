import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'
// const API_KEY = '?key=reduxfuntimes123';

export function fetchPosts() {
  const request = axios.get('/api/posts');

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post('/api/posts', values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }  
}

export function fetchPost(id) {
  const request = axios.get('/api/posts/:id');

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`/api/posts/${id}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}