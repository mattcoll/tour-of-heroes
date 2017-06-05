import { Component } from '@angular/core';

import { Hero } from './hero/hero'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <dashboard></dashboard>
    `,
  styleUrls: ['']
})
export class AppComponent  {
  title = 'The Heroes Tour';
}
