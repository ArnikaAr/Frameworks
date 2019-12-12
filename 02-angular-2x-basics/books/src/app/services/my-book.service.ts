import {EventEmitter, Injectable, Output} from '@angular/core';
import {Book} from '../model/book';


@Injectable({
  providedIn: 'root'
})

export class MyBookService {
  addedBooks: Book[];
  @Output() changeBooks = new EventEmitter<Book[]>();

  constructor() {
    this.addedBooks = [];
  }

  returnToMyBookToList() {
    return this.addedBooks;
  }

  addMyBook(book) {
    let exist = false;
    if (this.addedBooks.length === 0) {
      this.addedBooks.push(book);
    } else {
      for (const b in this.addedBooks) {
        if (this.addedBooks[b].id === book.id) {
          exist = true;
          console.log('You have this book already');
        }
      }
      if (exist === false) {
        this.addedBooks.push(book);
      }
    }
    this.changeBooks.emit(this.addedBooks);
  }

  deleteMyBook(book) {
    this.addedBooks = this.addedBooks.filter(thisBook => thisBook.id !== book.id);
    this.changeBooks.emit(this.addedBooks);
  }
}
