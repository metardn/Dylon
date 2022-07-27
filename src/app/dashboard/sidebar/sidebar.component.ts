import { Component, OnInit } from '@angular/core';
import { Model } from 'echarts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  airplane = "assets/airplane.png"

  constructor() { }

  ngOnInit(): void {
  }

}
