import { Component } from '@angular/core';
// import { FooddetailsService } from '../models/fooddetails.service';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent {
  details: Food[] = [];
  constructor(private service: FoodService,private router:Router) { }
  ngOnInit() {
    this.cardsdetails()
  }
  cardsdetails() {
    this.service.getdetails().subscribe(data => this.details = data)
  }
    onclick()
  {
    this.router.navigate(['/fooddetails'])
  }
  fooddetails(id: number | undefined){
    this.router.navigate(['/starter',id])
 }
  //   fooddetails(id: number | undefined){
  //     this.router.navigate(['/food',id])
  //  }
  data = [
    {
      id: 1,
      title: "image1",
      description: "desqwertyuiopasdfghjklzxcvbnm"
    },
    {
      id: 2,
      title: "image1",
      description: "desqwertyuiopasdfghjklzxcvbnm"
    },
    {
      id: 3,
      title: "image1",
      description: "desqwertyuiopasdfghjklzxcvbnm"
    }
  ]
}
