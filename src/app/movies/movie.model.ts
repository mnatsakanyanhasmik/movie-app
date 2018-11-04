export class Movie {
    public name: string;
    public description: string;
    public coverPath: string;

    constructor(name: string, desc: string, coverPath: string) {
        this.name = name;
        this.description = desc;
        this.coverPath = coverPath;
    }
}