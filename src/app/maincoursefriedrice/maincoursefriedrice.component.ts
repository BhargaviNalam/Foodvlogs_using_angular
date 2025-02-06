import { Component } from '@angular/core';
import { Maincoursefriedrice } from '../models/maincoursefriedrice';
import { MaincoursefriedriceService } from '../services/maincoursefriedrice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincoursefriedrice',
  templateUrl: './maincoursefriedrice.component.html',
  styleUrls: ['./maincoursefriedrice.component.css']
})
export class MaincoursefriedriceComponent {
  details: Maincoursefriedrice[] = [];
  constructor(private service: MaincoursefriedriceService,private route:Router) { }
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
