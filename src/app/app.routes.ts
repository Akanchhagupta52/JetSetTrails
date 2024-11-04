import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking-options/booking-options.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
export const routes : Routes = [
    {
        path:'home',
        component:NavbarComponent
    },
    {
        path:'aboutus',
        component:AboutusComponent
    },
   
    {
        path:'booking',
        component:BookingComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'booking-details/:tourID',
        component:BookingDetailsComponent
    },

    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'booking-details/:tourID/edit',
        component:BookingEditComponent
    },

    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
   
    {
        path:'**',
        component:NavbarComponent
    },
 
];
