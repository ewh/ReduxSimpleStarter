import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            let classes = 'list-group-item ';
            if (this.props.activeBook !== null && book.title === this.props.activeBook.title) {
                classes += 'active';
            }
            return (
                <li key={book.title}
                    className={classes}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
        activeBook: state.activeBook
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
