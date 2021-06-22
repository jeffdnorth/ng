import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  
  work1: string = "TQL";
  work2: string = "UFL";

  constructor() { }

  ngOnInit(): void {
  }

}
