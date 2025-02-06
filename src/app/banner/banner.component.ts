import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
   banner ={
    item1:"img1",
    item2:"img2",
    item3:"img3"
   }
   img1 ={
    src:"https://images.pexels.com/photos/10905930/pexels-photo-10905930.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt:"image1"   
  }
  img2 ={
    src:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt:"image1"   
  }
  img3 ={
    src:"https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt:"image1"   
  }
}
