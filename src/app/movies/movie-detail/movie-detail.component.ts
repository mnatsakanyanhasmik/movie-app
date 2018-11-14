import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.movie = this.movieService.getMovie(this.id);
        });
  }

  onEditMovie() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteMovie() {
    this.movieService.deleteMovie(this.id);
    this.router.navigate(['/movies']);
  }

}
