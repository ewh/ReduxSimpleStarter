import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_POST = 'create_post';

const BLOG_POST_ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts/';
const API_KEY = '?key=3466';

const PRIMARY_POSTS_URL = `${BLOG_POST_ROOT_URL}${API_KEY}`

export function fetchPosts() {
    const url = PRIMARY_POSTS_URL;

    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const url = PRIMARY_POSTS_URL;

    const request = axios.post(url, values)
        .then(() => {
            return callback();
        });

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const url = `${BLOG_POST_ROOT_URL}${id}${API_KEY}`

    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const url = `${BLOG_POST_ROOT_URL}${id}${API_KEY}`

    const request = axios.delete(url)
        .then((x) =>{
            callback();
        });

    return {
        type: DELETE_POST,
        payload: id
    };
}
