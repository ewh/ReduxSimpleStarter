import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    const book = this.props.book;
    var contents = null;
    if (book) {
      contents = (
        <div>
          <h3>Details for:</h3>
          <div>Title: {book.title}</div>
          <div>Pages: {book.pages}</div>
        </div>
      );
    } else {
      contents = <div>Select a book.</div>;
    }
    return (
      <div>{contents}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
