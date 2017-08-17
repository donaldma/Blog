import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POSTS_BEAUTY = 'fetch_posts_beauty';
export const FETCH_POSTS_FASHION = 'fetch_posts_fashion';
export const FETCH_POSTS_TRAVEL = 'fetch_posts_travel';
export const FETCH_POSTS_FITNESS = 'fetch_posts_fitness';
export const FETCH_ABOUT = 'fetch_about';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const EDIT_POST = 'edit_post';
export const FETCH_USER = 'fetch_user';

export function fetchPosts() {
  const request = axios.get('/api/posts');

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsBeauty() {
  const request = axios.get('/api/beauty');

  return {
    type: FETCH_POSTS_BEAUTY,
    payload: request
  };
}

export function fetchPostsFashion() {
  const request = axios.get('/api/fashion');

  return {
    type: FETCH_POSTS_FASHION,
    payload: request
  };
}

export function fetchPostsTravel() {
  const request = axios.get('/api/travel');

  return {
    type: FETCH_POSTS_TRAVEL,
    payload: request
  };
}

export function fetchPostsFitness() {
  const request = axios.get('/api/fitness');

  return {
    type: FETCH_POSTS_FITNESS,
    payload: request
  };
}

export function fetchAboutMe() {
  const request = axios.get('/api/about');
  return {
    type: FETCH_ABOUT,
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

export function editPost(id, values, callback) {
  const request = axios.post(`/api/posts/${id}/edit`, values)
    .then(() => callback());

  return {
    type: EDIT_POST,
    payload: request
  }  
}

export function fetchPost(id) {
  const request = axios.get(`/api/posts/${id}`);

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

export function fetchUser() {
  const request = axios.get('/api/user')
  
  return {
    type: FETCH_USER,
    payload: request
  }
}