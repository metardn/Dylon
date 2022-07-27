import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {

  darkmode = false

  constructor() { }

  ngOnInit(): void {
  }

  modeToggle() {
    this.darkmode = !this.darkmode
    document.documentElement.setAttribute('data-theme', this.darkmode? "dark" : "false")
  }
}
