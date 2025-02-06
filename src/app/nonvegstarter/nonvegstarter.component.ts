import { Component } from '@angular/core';
import { Food } from '../models/food';
import { FoodService } from '../services/food.service';
import { NonvegstarterService } from '../services/nonvegstarter.service';
import { Nonvegstarters } from '../models/nonvegstarters';

@Component({
  selector: 'app-nonvegstarter',
  templateUrl: './nonvegstarter.component.html',
  styleUrls: ['./nonvegstarter.component.css']
})
export class NonvegstarterComponent {
  details: Nonvegstarters[] = [];
  constructor(private service: NonvegstarterService) { }
  ngOnInit() {
    this.cardsdetails()
  }
  cardsdetails() {
    this.service.getdetails().subscribe(data => this.details = data)
  }
}
