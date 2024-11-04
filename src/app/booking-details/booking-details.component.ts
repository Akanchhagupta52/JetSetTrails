import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../booking-options/booking-options.service';
import { IBooking } from '../booking-options/booking-options.model';

 
@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  id: number | undefined;
  booking:IBooking | undefined;
 
 
  constructor(private router: Router, private route: ActivatedRoute,private bookService:BookingService 
  ) {}
 
  ngOnInit(): void {
   
    //this.id = +this.route.snapshot.params['tourId'];
    this.route.paramMap.subscribe((map)=>{
      this.id = +map.get('tourID')!;
      this.booking=this.bookService.getBookingById(this.id);
    });
  }
  onBack(): void {
    this.router.navigate(['/booking']);
  }
  onEdit(): void {
    this.router.navigate(['/booking-details', this.id, 'edit']);
  }
   
  onDelete(): void {
    if (this.id !== undefined) {
      this.bookService.deleteTravel (this.id);
      alert("Travel destination deleted successfully");
      this.router.navigate(['/travel-list']);
    } else {
      alert("No travel destination selected to delete.");
    }
  }
   
  }
