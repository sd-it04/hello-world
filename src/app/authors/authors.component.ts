import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }
}
