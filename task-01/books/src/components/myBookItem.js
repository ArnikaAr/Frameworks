import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class BookItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#F0F8FF',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
        }
    };
    descStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            margin: '10px'
        }
    };
    getAuStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }
    };

    render() {
        const {id, name, src, desc, author, data,subtitle} = this.props.book;
        return (
            <div style={this.getStyle()}>
                <p>{name}</p>
                <p>{subtitle}</p>
                <div style={this.descStyle()}>
                    <img style={imgStyle} src={src} alt="book photo"/>
                    <p>{desc}</p>
                </div>
                <div style={this.getAuStyle()}>
                    <p>{author}</p>
                    <p>{data}</p>
                    <button
                        style={btnStyle}
                        onClick={this.props.delBook.bind(this, id)}>
                        Remove
                    </button>
                </div>
            </div>

        )
    }
}

//PropsType
BookItem.propTypes = {
    book: PropTypes.object.isRequired
};
const btnStyle = {
    color: '#fff',
    backgroundColor: 'red',
    cursor: 'pointer',
    border: 'none',
    width: '50px',
    height: '20px',
    margin: '10px',
};
const imgStyle = {
    width: '100px',
};
export default BookItem;
