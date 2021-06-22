import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {

  education1: string = "University of Cincinnati";


  constructor() { }

  ngOnInit(): void {
  }

}
