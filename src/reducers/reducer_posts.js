import _ from 'lodash';
import {CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

const mapKeys = (array, keyName) => {
    return array.reduce((obj, nextItem) => {
        obj[nextItem[keyName]] = nextItem;
        return obj;
    }, {});
};

export default function(state = {}, action) {
    let result;
    switch(action.type) {
        case FETCH_POSTS:
            result = mapKeys(action.payload.data, 'id');
            break;
        case FETCH_POST:
            const post = action.payload.data;
            result = {...state, [action.payload.data.id]: action.payload.data};
            break;
        case CREATE_POST:
            result = state
            break;
        case DELETE_POST:
            result = _.omit(state, action.payload);
            break;
        default:
            result = state;
    }
    return result;
}
