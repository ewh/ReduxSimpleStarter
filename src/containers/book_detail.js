import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        console.log('BookDetail', this.props);
    }
    render() {
        console.log('BookDetail render', this.props);
        const {book} = this.props;

        let result;
        if (!book) {
            result = <div>Select a book.</div>
        } else {
            result = (
                <div>
                    <h3>Details for:</h3>
                    <div>Title: {book.title}</div>
                    <div>Pages: {book.pages}</div>
                </div>
            )
        }
        return result;
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps: detail', state);
    return {book: state.activeBook};
}

export default connect(mapStateToProps)(BookDetail);
