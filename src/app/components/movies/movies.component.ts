import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchText = '';
  errorMessage = '';
  movies: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  searchMovie() {
    this.httpClient.get(`http://www.omdbapi.com/?s=${this.searchText}` + `&apikey=7cb7259a`)
      .subscribe((data: any) => {
        if (data.Response === 'False') {
          this.errorMessage = data.Error;
        } else {
          this.movies = data.Search;
          this.errorMessage = '';
        }
      });
  }

}
