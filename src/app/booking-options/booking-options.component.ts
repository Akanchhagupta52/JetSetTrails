import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBooking} from './booking-options.model';
import { FormsModule } from '@angular/forms';
import { RouterLink  } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookingRatingComponent } from '../booking-rating/booking-rating.component';
import { BookingService } from './booking-options.service';
import { CityObsService } from './booking-obs.service';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, BookingRatingComponent,FontAwesomeModule ],
  templateUrl: './booking-options.component.html',
  styleUrl: './booking-options.component.css'
})
export class BookingComponent {
  searchTerm: string = '';
 
  bookings:IBooking[]= []
  constructor(private _bookService:BookingService,private cityObsService: CityObsService ){
 
  }
  ngOnInit():void{
    this.bookings=this._bookService.getBookings();
  }
    

  get filteredBookings() {
    return this.bookings.filter(booking =>
      booking.tourName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

onRatingClicked(message: string): void {
  console.log(message);
  alert(message);
} 
}
