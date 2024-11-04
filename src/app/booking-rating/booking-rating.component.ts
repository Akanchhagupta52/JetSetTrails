/*import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
 
@Component({
  selector: 'app-booking-rating',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './booking-rating.component.html',
  styleUrl: './booking-rating.component.css'
})
export class BookingRatingComponent {
 
  faStar=faStar;
 
  @Input()
  rating!: number;
  starWidth!: number;
 
  @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();
 
  ngOnChnages():void{
    this.starWidth=this.rating * 90/5;
  }
 
  onClick():void{
    this.ratingClicked.emit(`The rating ${this.rating}`)
  }
 
 
 
}*/
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
 
@Component({
  selector: 'app-booking-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './booking-rating.component.html',
  styleUrls: ['./booking-rating.component.css'] // Fix: styleUrls (plural)
})
export class BookingRatingComponent implements OnChanges {
 
  faStar = faStar;
 
  @Input()
  rating!: number;
  starWidth!: number;
 
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
 
  // Fix: Corrected the method name to ngOnChanges
  ngOnChanges(): void {
    // Update starWidth whenever the rating changes
    this.starWidth = (this.rating * 90) / 5; // Adjust starWidth based on rating
  }
 
  onClick(): void {
    this.ratingClicked.emit(`The rating is ${this.rating}`); 
    // Fixed string interpolation
  }
}
 
 
