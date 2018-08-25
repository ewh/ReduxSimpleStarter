import { combineReducers } from 'redux';
import {BooksReducer, ActiveBookReducer} from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default rootReducer;
