import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  todo = ["Học TypeScript", "Học Angular 4", "Học HTML5"];
  constructor() { }
   ngOnInit() {}
}
