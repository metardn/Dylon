import { Component, OnInit } from '@angular/core';
import { Model } from 'echarts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  airplane = "assets/airplane.png"
  darkmode = false

  constructor() { }

  ngOnInit(): void {
  }

  modeToggle() {
    this.darkmode = !this.darkmode
    document.documentElement.setAttribute('data-theme', this.darkmode? "dark" : "false")
  }

}
