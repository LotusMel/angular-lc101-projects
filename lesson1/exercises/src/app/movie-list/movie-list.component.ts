import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate (2004)', 'Oceans 8', 'The Color Purple', 'Goodfellas', 'Ragtime'];

   constructor() { }

   ngOnInit() {
   }

}
