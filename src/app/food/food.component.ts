import { Component } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
records:Food[]=[]
constructor(private service:FoodService , private router:Router){

}
ngOnInit():void{
  this.getrecords();
}
onclick(){
  this.router.navigate(['/starter'])
}
onclick1(){
  this.router.navigate(['/maincourse'])
}
onclick2(){
  this.router.navigate(['/desserts'])
}
fooddetails(id: number | undefined){
   this.router.navigate(['/food',id])
}
getrecords():void{
  this.service.getdetails().subscribe(data=>this.records=data);
}


}
