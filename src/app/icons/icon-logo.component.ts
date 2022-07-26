import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-logo',
  template: `<svg width="25" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.60854 18.9083L14.3156 22.3015V15.5104L7.60319 12.1172V18.9083H7.60854ZM4.71804 20.3678L14.3156 25.2204V29.9944L0 22.7543V8.26933L4.71804 10.6568V20.3678ZM15 7.67974L8.294 11.0767L15 14.4699L21.706 11.0767L15 7.68349V7.67974ZM15 4.76457L25.2905 10.6568L27.7886 6.4743L15 0L0.703643 7.23543L5.42062 9.61725L15 4.76457ZM25.2755 20.3678V15.4326L22.3915 16.892V18.9083L15.6844 22.3062V15.5151L30 8.27496V22.7552L15.6844 30V25.2307L25.2755 20.3678Z" fill="currentColor"/>
  </svg>`,
})
export class IconLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
