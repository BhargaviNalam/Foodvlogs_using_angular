import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';
// import { FooddetailsService } from '../services/fooddetails.service';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent {
  food: any
   constructor(private service: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getdetails().subscribe(data =>{
      this.food =data.find(c=>c.id === id);
    })
  }
  data=[
    {
      id:1,
      title:"image1",
      description:"desqwertyuiopasdfghjklzxcvbnm"
    },
    {
      id:1,
      title:"image1",
      description:"desqwertyuiopasdfghjklzxcvbnm"
    },
    {
      id:1,
      title:"image1",
      description:"desqwertyuiopasdfghjklzxcvbnm"
    }
  ];


}
