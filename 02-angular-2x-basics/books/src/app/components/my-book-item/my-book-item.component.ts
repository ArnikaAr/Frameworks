import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from '../../model/book';

@Component({
  selector: 'app-my-book-item',
  templateUrl: './my-book-item.component.html',
  styleUrls: ['./my-book-item.component.css']
})
export class MyBookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onDelete(book) {
    this.deleteBook.emit(book);
  }
}
