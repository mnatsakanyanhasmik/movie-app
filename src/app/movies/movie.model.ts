import { MovieDuration } from "./movie-duration.model";

export class Movie {

    constructor(
        public name: string, 
        public description: string, 
        public coverPath: string, 
        public year: number, 
        public duration: MovieDuration,
        public rateValue?: number) {
    }

}