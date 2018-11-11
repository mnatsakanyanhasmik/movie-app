import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MovieService } from '../movie.service';
import { MovieDuration } from '../movie-duration.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  firstMovieYear: number = 1888;
  
  id: number;
  editMode = false;
  movieForm: FormGroup;
  years: number[] = [];
  
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) {

    for(let i = this.firstMovieYear; i < (new Date()).getFullYear(); i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
  }

  onCancel() {
    this.routeUp();
  }
  
  private routeUp() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if (this.editMode) {
      this.movieService.updateMovie(this.id, this.movieForm.value);
    } else {
      this.movieService.addMovie(this.movieForm.value);
    }
    this.routeUp();
  }

  private initForm() {
    let movieName = '';
    let movieYear;
    let movieCoverPath = '';
    let movieDescription = '';
    let movieDuration : MovieDuration = new MovieDuration();

    if (this.editMode) {
      const movie = this.movieService.getMovie(this.id);
      movieName = movie.name;
      movieYear = movie.year;
      movieCoverPath = movie.coverPath;
      movieDescription = movie.description;
      movieDuration = movie.duration;
    }

    this.movieForm = new FormGroup({
      'name': new FormControl(movieName, Validators.required),
      'year': new FormControl(null, Validators.required),
      'coverPath': new FormControl(movieCoverPath, Validators.required),
      'description': new FormControl(movieDescription, Validators.required),
      'duration': new FormGroup({
        'hours': new FormControl(movieDuration.hours, [Validators.required, Validators.min(0), Validators.max(1000)]),
        'minutes': new FormControl(movieDuration.minutes, [Validators.required, Validators.min(0), Validators.max(59)])
      }),
    });
  
    this.movieForm.controls['year'].setValue(movieYear, {onlySelf: true})
  }

}
