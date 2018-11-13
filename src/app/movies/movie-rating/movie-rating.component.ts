import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {
  @Input() id: number;
  @Input() rateValue: number;
  @Input() isInteractive: boolean = false;

  constructor(private movieService: MovieService) {
  
  }

  ngOnInit() {
  }

  onStarClicked(ratingStarIndex: number) {
    if(this.isInteractive){
      this.movieService.rateMovie(this.id, ratingStarIndex + 1);
    }
  }

}
