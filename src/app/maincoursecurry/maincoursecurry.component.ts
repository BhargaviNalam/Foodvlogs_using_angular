import { Component } from '@angular/core';
import { Maincoursecurry } from '../models/maincoursecurry';
import { MaincoursecurryService } from '../services/maincoursecurry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincoursecurry',
  templateUrl: './maincoursecurry.component.html',
  styleUrls: ['./maincoursecurry.component.css']
})
export class MaincoursecurryComponent {
  details: Maincoursecurry[] = [];
  constructor(private service: MaincoursecurryService,private route:Router) { }
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
