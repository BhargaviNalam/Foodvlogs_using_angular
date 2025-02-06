import { Component } from '@angular/core';
import { Desserts } from '../models/desserts';
import { DessertsService } from '../services/desserts.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {
  details: Desserts[] = [];
  constructor(private service: DessertsService, private route: Router) { }
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
