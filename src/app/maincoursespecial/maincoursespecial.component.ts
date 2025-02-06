import { Component } from '@angular/core';
import { Maincoursespecial } from '../models/maincoursespecial';
import { MaincoursespecialService } from '../services/maincoursespecial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincoursespecial',
  templateUrl: './maincoursespecial.component.html',
  styleUrls: ['./maincoursespecial.component.css']
})
export class MaincoursespecialComponent {
  details: Maincoursespecial[] = [];
  constructor(private service: MaincoursespecialService,private route:Router) { }
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
