import {BOOK_SELECTED} from '../actions/index';

export function BooksReducer(state, action) {
    return [
        {title: 'Javascript: The Good Parts', pages: 101},
        {title: 'Harry Potter', pages: 39},
        {title: 'The Dark Tower', pages: 85},
        {title: 'Eloquent Ruby', pages: 1}
    ];
}

export function ActiveBookReducer(state=null, action) {
    if (action.type == BOOK_SELECTED) {
        return action.payload;
    } else {
        return state;
    }
}
