import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Subject } from 'rxjs';
import { MovieDuration } from './movie-duration.model';

@Injectable()
export class MovieService {
    moviesChanged = new Subject<Movie[]>();

    private movies: Movie[] = [
        new Movie(
            'Tucker & Dale vs. Evil',
            'Two scruffy pals backwoods vacation takes a bloody turn when ignorant college students mistake them for a pair of murderous hillbillies.',
            'http://www.gstatic.com/tv/thumb/movieposters/8090141/p8090141_p_v8_af.jpg',
            2010,
            new MovieDuration(1, 30)),
        new Movie(
            'War Dogs',
            'With the war in Iraq raging on, a young man (Jonah Hill) offers his childhood friend a chance to make big bucks by becoming an international arms dealer. Together, they exploit a government initiative that allows businesses to bid on U.S. military contracts. Starting small allows the duo to rake in money and live the high life. ',
            'http://www.gstatic.com/tv/thumb/v22vodart/12118906/p12118906_v_v8_ab.jpg',
            2016,
            new MovieDuration(2, 10))
    ];

    getMovies() {
        return this.movies.slice();
    }

    getMovie(index: number) {
        return this.movies[index];
    }

    updateMovie(index: number, newMovie: Movie) {
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice());
    }

    addMovie(toAddMovie: Movie) {
        this.movies.push(toAddMovie);
        this.moviesChanged.next(this.movies.slice());
    }

    deleteMovie(index: number) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    }

}