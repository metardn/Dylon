import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  logo = "assets/dashboard_logo.png"
  airplane = "assets/airplane.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
