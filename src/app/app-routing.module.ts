import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Food } from './models/food';
import { FoodComponent } from './food/food.component';
import { ErrorComponent } from './error/error.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { DessertsComponent } from './desserts/desserts.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PayComponent } from './pay/pay.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'Aboutus',
    component: AboutusComponent
  },
  {
    path: 'Home',
    component: WelcomeComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'starter',
    component: StarterComponent
  },
  {
    path: 'maincourse',
    component: MaincourseComponent
  },
  {
    path: 'desserts',
    component: DessertsComponent
  },
  {
    path:'Payment',
    component:PaymentComponent
  },
  {
    path:'pay',
    component:PayComponent
  },
  {
    path:'gallary',
    component:GallaryComponent
  },
  {
    path: 'starter/:id',
    component: FooddetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
