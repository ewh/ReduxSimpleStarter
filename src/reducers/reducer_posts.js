// import _ from 'lodash';
import {FETCH_POSTS} from '../actions';


function mapKeys(data, keyName) {
    var output = {};
    if (data !== undefined) {
        data.forEach(d => {
            output[d.id] = d;
        });
    }
    return output;
}

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // return _.mapKeys(action.payload.data, 'id');
            return mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
