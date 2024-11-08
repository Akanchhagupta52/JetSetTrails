import { Injectable } from "@angular/core";
import { IBooking } from "./booking-options.model";
 
@Injectable({
    providedIn:'root'
})
 
export class BookingService{
    private bookings:IBooking[]=[    
        {
            tourID: 1,
            tourName: "Venice, Rome and Milan – 9 Days 8 Nights",
            duration: "7 Days",
            price: 35000,
            rating: 4.8,
            image: "assets/venice_image.jpg",
        },
        {
            tourID: 2,
            tourName: "Paris – 6 Days 5 Nights",
            duration: "5 Days",
            price: 20000,
            rating: 4.5,
            image: "assets/Paris_image.jpg",
        },
        {
            tourID: 3,
            tourName: "Moscow",
            duration: "8 Days",
            price: 35500,
            rating: 4.2,
            image: "assets/moscow_image.jpg",
        },
        {
          tourID: 4,
          tourName: "Germany",
          duration: "8 Days",
          price: 40500,
          rating: 4.1,
          image: "assets/germany.jpg",
      },
      {
        tourID: 5,
        tourName: "Singapore",
        duration: "8 Days",
        price: 30600,
        rating: 3.5,
        image: "assets/singapore.jpg",
      },
      {
        tourID: 6,
        tourName: "Maldives ",
        duration: "8 Days",
        price: 55050,
        rating: 3.8,
        image: "assets/maldives.jpg",
      },
      {
        tourID: 7,
        tourName: "switzerland",
        duration: "8 Days",
        price: 50500,
        rating: 4.4,
        image: "assets/switzerland.jpg",
      },
      {
        tourID: 8,
        tourName: "Dubai",
        duration: "8 Days",
        price: 50500,
        rating: 3.1,
        image: "assets/Dubai.jpg",
      },
      {
        tourID: 9,
        tourName: "Italy",
        duration: "8 Days",
        price: 55500,
        rating: 3.9,
        image: "assets/Italy.jpg",
      },
        ]
        getBookings(){
            return this.bookings;
        }
        getBookingById(id:number){
            const booking=this.bookings.find(
             booking=>booking.tourID===id
        )
        return booking;
        }
        deleteTravel(id: number): void {
          const index = this.bookings.findIndex(booking => booking.tourID  === id);
          if (index !== -1) {
            this.bookings.splice(index, 1);
          }
        }
        updateBooking(booking: IBooking) {
          const bookingidx = this.bookings.findIndex(x => x.tourID === booking.tourID);
          if (bookingidx >= 0) {
            this.bookings[bookingidx] = booking;
          }
        }

 
}