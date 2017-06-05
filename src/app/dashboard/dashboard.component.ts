import { Component } from '@angular/core'

import { Hero } from '../hero/hero'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  hero: Hero = {
    id: 1,
    name: 'Matman',
    power: 'Strength'
  }
}
