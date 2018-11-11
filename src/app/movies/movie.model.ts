import { MovieDuration } from "./movie-duration.model";

export class Movie {
    public name: string;
    public description: string;
    public coverPath: string;
    public year: number;
    public duration: MovieDuration;

    constructor(name: string, desc: string, coverPath: string, year: number, duration: MovieDuration) {
        this.name = name;
        this.description = desc;
        this.coverPath = coverPath;
        this.year = year;
        this.duration = duration;
    }

}