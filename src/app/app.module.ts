import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FoodComponent } from './food/food.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { BannerComponent } from './banner/banner.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SildeComponent } from './silde/silde.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { MaincourseComponent } from './maincourse/maincourse.component';
import { DessertsComponent } from './desserts/desserts.component';
import { NonvegstarterComponent } from './nonvegstarter/nonvegstarter.component';
import { MaincoursebiryaniComponent } from './maincoursebiryani/maincoursebiryani.component';
import { MaincoursefriedriceComponent } from './maincoursefriedrice/maincoursefriedrice.component';
import { MaincoursespecialComponent } from './maincoursespecial/maincoursespecial.component';
import { MaincoursecurryComponent } from './maincoursecurry/maincoursecurry.component';
import { DessertsdrinksComponent } from './dessertsdrinks/dessertsdrinks.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PayComponent } from './pay/pay.component';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    ErrorComponent,
    NavbarComponent,
    FooddetailsComponent,
    BannerComponent,
    FaqComponent,
    FooterComponent,
    SildeComponent,
    ContactusComponent,
    AboutusComponent,
    WelcomeComponent,
    HomeComponent,
    StarterComponent,
    MaincourseComponent,
    DessertsComponent,
    NonvegstarterComponent,
    MaincoursebiryaniComponent,
    MaincoursefriedriceComponent,
    MaincoursespecialComponent,
    MaincoursecurryComponent,
    DessertsdrinksComponent,
    LoginComponent,
    PaymentComponent,
    PayComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
