import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=arst1234';
const FULL_POSTS_URL = `${ROOT_URL}/posts${API_KEY}`;

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
