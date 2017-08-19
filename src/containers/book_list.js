import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item"
                    onClick={
                        () => {
                            // console.log(`book click: "${book.title}"`);
                            this.props.selectBook(book);
                        }
                    }>
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    const {books} = state;
    return {books};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
