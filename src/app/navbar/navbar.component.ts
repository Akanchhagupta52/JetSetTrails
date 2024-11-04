
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm: any;
onSearch() {
throw new Error('Method not implemented.');
}

}


// @Component ({
//   imports: [
//     MatSlideToggleModule,
//   ]
// })class AppComponent {}
 




