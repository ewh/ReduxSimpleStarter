import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        let title = '(Nothing selected)';
        let pages = '';
        if (this.props.activeBook) {
            title = `"${this.props.activeBook.title}"`;
            pages = this.props.activeBook.pages;
        }
        return (
            <div>
                <h3>Book Detail:</h3>
                <div>Title: {title}</div>
                <div>Pages: {pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
