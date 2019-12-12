import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Book} from '../../model/book';
import {MyBookService} from '../../services/my-book.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private MyBookService: MyBookService) {
  }

  ngOnInit() {
  }

  onAddMyBook(book) {
    this.MyBookService.addMyBook(book);
  }
}
