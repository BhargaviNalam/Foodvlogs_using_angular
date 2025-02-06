import { Component } from '@angular/core';
import { MaincourseComponent } from '../maincourse/maincourse.component';
import { Maincoursebiryani } from '../models/maincoursebiryani';
import { MaincoursebiryaniService } from '../services/maincoursebiryani.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincoursebiryani',
  templateUrl: './maincoursebiryani.component.html',
  styleUrls: ['./maincoursebiryani.component.css']
})
export class MaincoursebiryaniComponent {
  details: Maincoursebiryani[] = [];
  constructor(private service: MaincoursebiryaniService,private route:Router) { }
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
