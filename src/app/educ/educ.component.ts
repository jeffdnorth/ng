import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {

  schools:  string[] = [

  "University of Cincinnati",
  "Greenhills Highshool"
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
