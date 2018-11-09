import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription: Subscription;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged
    .subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      });
    
    this.movies = this.movieService.getMovies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
