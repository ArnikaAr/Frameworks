import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter<any>();
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const googleAPI = 'https://www.googleapis.com/books/v1/volumes?maxResults=' + 10 + '&q=' + this.title;
    fetch(googleAPI)
      .then(response => response.json())
      .then(commits => {
          this.addBook.emit(commits.items);
        });
    this.title = '';
  }


}
