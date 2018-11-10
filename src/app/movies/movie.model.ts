export class Movie {
    public name: string;
    public description: string;
    public coverPath: string;
    public year: number;

    constructor(name: string, desc: string, coverPath: string, year: number) {
        this.name = name;
        this.description = desc;
        this.coverPath = coverPath;
        this.year = year;
    }
}