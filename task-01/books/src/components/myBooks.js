import React, {Component} from 'react'
import MyBookItem from './myBookItem';
import PropTypes from 'prop-types';

class myBooks extends Component {
    render() {
        return this.props.myBooks.map((book, index) => (
            <MyBookItem
                key={ book.id + String(index)}
                book={book}
                delBook={this.props.delBook}
                onLoad  = {this.props.getMyBooks}
            />))
    }

}

//PropTypes
myBooks.propTypes = {
    myBooks: PropTypes.array.isRequired
};
export default myBooks;
