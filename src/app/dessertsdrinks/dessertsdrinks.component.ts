import { Component } from '@angular/core';
import { Dessertsdrinks } from '../models/dessertsdrinks';
import { DessertsdrinksService } from '../services/dessertsdrinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dessertsdrinks',
  templateUrl: './dessertsdrinks.component.html',
  styleUrls: ['./dessertsdrinks.component.css']
})
export class DessertsdrinksComponent {
  details: Dessertsdrinks[] = [];
  constructor(private service: DessertsdrinksService, private route: Router) { }
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
