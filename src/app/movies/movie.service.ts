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
            'Affable hillbillies Tucker and Dale are on vacation at their dilapidated mountain cabin when they are mistaken for murderers by a group of preppy college students.',
            'http://www.gstatic.com/tv/thumb/movieposters/8090141/p8090141_p_v8_af.jpg',
            2010,
            new MovieDuration(1, 30),
            null),
        new Movie(
            'War Dogs',
            'With the war in Iraq raging on, a young man (Jonah Hill) offers his childhood friend a chance to make big bucks by becoming an international arms dealer. Together, they exploit a government initiative that allows businesses to bid on U.S. military contracts. Starting small allows the duo to rake in money and live the high life. ',
            'http://www.gstatic.com/tv/thumb/v22vodart/12118906/p12118906_v_v8_ab.jpg',
            2016,
            new MovieDuration(2, 10),
            null),
        new Movie(
            'The Nice Guys',
            'In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.',
            'https://m.media-amazon.com/images/M/MV5BMjcwNDA5MDYyNl5BMl5BanBnXkFtZTgwNjg0NDkzNzE@._V1_.jpg',
            2016,
            new MovieDuration(1, 56),
            null)
    ];

    private notifyMoviesChanged() {
        this.moviesChanged.next(this.movies.slice());
    }

    /**
     * Method to update the rating of the Movie
     * 
     * @param index of the movie to rate
     * @param rateValue the new rating value
     */
    rateMovie(index: number, rateValue: number) {
        this.movies[index].rateValue = rateValue;
        this.notifyMoviesChanged();
    }

    /**
     * Returns list of existing movies
     */
    getMovies() {
        return this.movies.slice();
    }

    /**
     * Returns exact movie
     * 
     * @param index of the movie to return
     */
    getMovie(index: number) {
        return this.movies[index];
    }

    /**
     * Method to update the movie
     * 
     * @param index of the movie to update
     * @param newMovie
     */
    updateMovie(index: number, newMovie: Movie) {
        this.movies[index] = newMovie;
        this.notifyMoviesChanged();
    }

    /**
     * Method to add a new movie
     * 
     * @param toAddMovie 
     */
    addMovie(toAddMovie: Movie) {
        this.movies.push(toAddMovie);
        this.notifyMoviesChanged();
    }

    /**
     * Method to delete a movie
     * 
     * @param index of the movie to delete
     */
    deleteMovie(index: number) {
        this.movies.splice(index, 1);
        this.notifyMoviesChanged();
    }

}