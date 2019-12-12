import React, {Component} from 'react';
import './App.css';
import Books from './components/booksList';
import Header from './components/layout/header';
import AddBook from "./components/addBook";
import MyBooks from './components/myBooks'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            myBooks: []
        };
        this.getMyBooks();
        this.LSList = [];
    }

    addMyBook = (id) => {
        const currentBook = this.state.books.filter((book) => book.id === id)[0];
        let exist = false;
        console.log(currentBook)
        if (this.LSList.length === 0) {
            this.LSList.push(currentBook)
            this.setState(
                {
                    myBooks: [
                        ...this.state.myBooks,
                        ...this.state.books.filter((book) => book.id === id)
                    ]
                });
        } else {
            for (let book in this.LSList) {
                if (this.LSList[book].id === currentBook.id) {
                    exist = true;
                    console.log("You have this book already")
                }
            }
            if (exist === false) {
                this.LSList.push(currentBook)
                this.setState(
                    {
                        myBooks: [
                            ...this.state.myBooks,
                            ...this.state.books.filter((book) => book.id === id)
                        ]
                    });
            }
        }
        localStorage.setItem('myBooks', JSON.stringify(this.LSList));

    };

    addBook = (books) => {
        this.setState({books: []});
        Array.from(books.items).forEach(book => {
                let author = '';
                let src;
                let desc = book.volumeInfo.description;
                if (book.volumeInfo.authors) {
                    author = book.volumeInfo.authors.join(', ');
                }
                if (desc) {
                    desc = book.volumeInfo.description.slice(0, 200)
                } else {
                    desc = ' ';
                }
                if (book.volumeInfo.imageLinks) {
                    src = book.volumeInfo.imageLinks.smallThumbnail
                }
                const newBook = {
                    id: 'id' + book.id,
                    name: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    src,
                    desc: desc,
                    author: author,
                    data: this.formatDate(book.volumeInfo.publishedDate)
                };
                this.setState({books: [...this.state.books, newBook]})
            }
        )
    };

    formatDate(date) {
        if (date === undefined) {
            return date
        }
        return date.split('-').reverse().join('.');
    }

    delBook = (id) => {
        this.setState({
            myBooks: [...this.state.myBooks.filter((book) => book.id !== id)]
        })
        const currentLsState = JSON.parse(localStorage.getItem('myBooks'));
        const newStateLSState = currentLsState.filter((book) => book.id !== id);
        localStorage.setItem('myBooks', JSON.stringify(newStateLSState));
    };
    getMyBooks = () => {
        this.state.myBooks = JSON.parse(localStorage.getItem('myBooks')) || [];
    };

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <Header/>
                    <AddBook addBook={this.addBook}/>
                    <div className='books'>
                        <div className='allbooks'>
                            <h2>My Books List:</h2>
                            <MyBooks myBooks={this.state.myBooks}
                                     delBook={this.delBook}
                            />
                        </div>
                        <div className='mybooks'>
                            <h2>Books List:</h2>
                            <Books books={this.state.books}
                                   addMyBook={this.addMyBook}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
