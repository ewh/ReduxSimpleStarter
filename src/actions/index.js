import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=arst1234';
const FULL_POSTS_URL = `${ROOT_URL}/posts${API_KEY}`;

function createPostApiUrl(postId) {
    return `${ROOT_URL}/posts/${postId}${API_KEY}`;
}

export function fetchPosts() {
    const request = axios.get(FULL_POSTS_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callbackFn) {
    const request = axios.post(FULL_POSTS_URL, values)
    .then(
        () => callbackFn()
    );

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(postId) {
    const request = axios.get(createPostApiUrl(postId));

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(postId, callbackFn) {
    const request = axios.delete(createPostApiUrl(postId))
    .then(
        () => callbackFn()
    );

    return {
        type: DELETE_POST,
        payload: postId
    }
}
