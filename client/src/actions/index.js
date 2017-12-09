import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_RANDOM_POSTS = 'fetch_random_posts';
export const FETCH_MOST_RECENT = 'fetch_most_recent';
export const FETCH_ABOUT = 'fetch_about';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const EDIT_POST = 'edit_post';
export const FETCH_USER = 'fetch_user';

export function fetchPosts(limit) {
  const request = axios.get(`/api/posts?limit=${limit}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`/api/posts/${id}`);
  return function(dispatch) {
    dispatch(fetchPosts());

    return {
      type: FETCH_POST,
      payload: request
    }
  }
}

export function fetchRandomPosts() {
  const request = axios.get('/api/posts/random');

  return {
    type: FETCH_RANDOM_POSTS,
    payload: request
  };
}

export function fetchMostRecent() {
  const request = axios.get('/api/posts/recent');

  return {
    type: FETCH_MOST_RECENT,
    payload: request,
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