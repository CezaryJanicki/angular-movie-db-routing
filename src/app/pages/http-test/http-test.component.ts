import {Component} from '@angular/core';
import {HttpMoviesService} from '../../services/http-movies.service';
import {Movie} from '../../models/movie';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})

export class HttpTestComponent {
  errorMessage: string;
  constructor(private http: HttpMoviesService) {
  }

  get() {
    this.http.getMovies().subscribe({error: (err: string) => (this.errorMessage = err)});
  }

  post() {
    const movie: Movie = {
      country: 'Poland',
      director: 'MB',
      category: 'Sfi-Fi',
      plot: 'Not much to tell',
      poster: null,
      year: '2001',
      title: 'Wiedzmin',
      imdbRating: '10.0',
    };
    this.http.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      id: '54',
      country: 'Poland',
      director: 'MB',
      category: 'Sfi-Fi',
      plot: 'Not much to tell',
      poster: null,
      year: '2001',
      title: 'Wiedzmin 2',
      imdbRating: '10.0',
    };
    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
      plot: 'Not much to tell 2',
    };
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('54').subscribe()
  }

  error() {
    this.http.makeError().subscribe();
  }

  headers() {
    this.http.headers().subscribe();
  }

  params() {
    this.http.params().subscribe();
  }
}
