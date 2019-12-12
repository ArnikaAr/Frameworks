import React, {Component} from 'react';
import BookItem from "./bookItem";
import PropTypes from 'prop-types';

class Books extends Component {
    render() {
        return this.props.books.map((book, index) => (<BookItem
            key={ book.id + String(index)}
            book={book}
            addMyBook={this.props.addMyBook}/>))
    }
}

//PropTypes
Books.propTypes = {
    books: PropTypes.array.isRequired
};
export default Books;
