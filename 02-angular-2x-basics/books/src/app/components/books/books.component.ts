import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {MyBookService} from '../../services/my-book.service';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  myBooks: Book[] = [];
  subscriber: Subscription;

  constructor(private myBookService: MyBookService) {
  }

  ngOnInit() {
    this.subscriber = this.myBookService.changeBooks.subscribe((books) => {
      this.myBooks = books;
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  deleteBook(book: Book) {
    this.myBookService.deleteMyBook(book);
  }

  addBook(books: []) {
    this.books = [];
    books.forEach((currentBook: any, index) => {
      let author = '';
      let src: string;
      let desc: string = currentBook.volumeInfo.description;
      const subtitle: string =  currentBook.volumeInfo.subtitle;
      const title: string =  currentBook.volumeInfo.title;
      if (currentBook.volumeInfo.authors) {
        author = currentBook.volumeInfo.authors.join(', ');
      }
      if (desc) {
        desc = currentBook.volumeInfo.description.slice(0, 200);
      } else {
        desc = ' ';
      }
      if (currentBook.volumeInfo.imageLinks) {
        src = currentBook.volumeInfo.imageLinks.smallThumbnail;
      }
      const bookObj = {
        subtitle,
        title,
        author,
        desc,
        data: this.formatDate(currentBook.volumeInfo.publishedDate),
        id: index,
        src
      };
      this.books.push(bookObj);
    });
  }

  formatDate(date) {
    if (date === undefined) {
      return date;
    }
    return date.split('-').reverse().join('.');
  }
}
