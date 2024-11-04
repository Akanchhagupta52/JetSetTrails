/*import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactusComponent {

}*/
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Contact } from './contact-us.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactComponent {
  contact = new Contact();

  save(contactForm: NgForm) {
    console.log(contactForm.form);
  console.log(contactForm.valid);
  console.log("Saved info " + JSON.stringify(contactForm.value))

  if (contactForm.valid) {
    alert("Thank you! Your message has been submitted successfully.");
    contactForm.reset(); // Optionally reset the form after submission
  } else {
    alert("Please fill all required fields correctly.");
  }
  }
}
