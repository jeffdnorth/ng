import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  
  work1: string = "Total Quality Logistics";
  work2: string = "United Financial Life";

  constructor() { }

  ngOnInit(): void {
  }

}
