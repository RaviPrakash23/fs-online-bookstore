import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  myDate = new Date();
  books: Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this._bookService.getBooks().subscribe(
      data => 
      this.books = data
      //console.log(this.books);
    )
  }


}


/* 

        {
        "id": "100",
        "sku": "text-100",
        "name": "C Programming Language",
        "description": "Learn C Programming Language",
        "unitPrice": 600,
        "imageUrl": "assets/images/books/text-100.png",
        "active": true,
        "unitsInStock": 100,
        "createdOn": this.myDate,
        "updatedOn": null
        },
        {
          "id": "101",
          "sku": "text-101",
                "name": "C Programming Language",
                "description": "Learn C Programming Language",
                "unitPrice": 600,
                "imageUrl": "assets/images/books/text-100.png",
                "active": true,
                "unitsInStock": 100,
                "createdOn": this.myDate,
                "updatedOn": null
        }
  
*/
