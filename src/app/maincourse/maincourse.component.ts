import { Component } from '@angular/core';
import { Maincourse } from '../models/maincourse';
import { MaincourseService } from '../services/maincourse.service';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.css']
})
export class MaincourseComponent {

  details: Maincourse[] = [];
  constructor(private service: MaincourseService,private route:Router) { }
  ngOnInit() {
    this.cardsdetails()
  }
  cardsdetails() {
    this.service.getdetails().subscribe(data => this.details = data)
  }
  onclick1(){
    this.route.navigate(['/order'])
  }
}
