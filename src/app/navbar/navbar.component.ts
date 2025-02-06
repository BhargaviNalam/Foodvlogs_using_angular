import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar = {
    logo: "navlogo",
    item1: "Home",
    item2: "Gallery",
    item3: "Contactus",
    item4: "Login"
  }
  navbarlogo = {
    src:"src/assets/logo.png",
    alt: "logo"
  }

}
