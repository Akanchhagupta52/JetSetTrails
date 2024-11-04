import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookingComponent } from './booking-options/booking-options.component';
import { AboutusComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from './register/register.component';
 
@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [BookingComponent,  NavbarComponent, AboutusComponent, ContactComponent,  RouterLink,RouterLinkActive , RouterOutlet,RegisterComponent],    // Import the standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel Booking';
}
 
