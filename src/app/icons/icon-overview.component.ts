import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-overview',
  template: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.71429 16.6214V5.28571M11 16.6929V11M15.2857 16.7143V8.14286M3.85714 1H18.1429C18.9006 1 19.6273 1.30102 20.1632 1.83684C20.699 2.37266 21 3.09938 21 3.85714V18.1429C21 18.9006 20.699 19.6273 20.1632 20.1632C19.6273 20.699 18.9006 21 18.1429 21H3.85714C3.09938 21 2.37266 20.699 1.83684 20.1632C1.30102 19.6273 1 18.9006 1 18.1429V3.85714C1 3.09938 1.30102 2.37266 1.83684 1.83684C2.37266 1.30102 3.09938 1 3.85714 1V1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
})
export class IconOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
