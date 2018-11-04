import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {


    private movies: Movie[] = [
        new Movie(
            'Kino 1',
            'Dolor sit ament',
            'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'),
        new Movie(
            'Kino 2',
            'Wow lorem ipsum?',
            'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png')
    ];

    getMovies() {
        return this.movies.slice();
    }

    getMovie(index: number) {
        return this.movies[index];
    }

}