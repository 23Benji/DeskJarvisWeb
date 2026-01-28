import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {

  scrollToDashboard() {
    // Finds the <app-dashboard> element and scrolls to it
    const dashboardElement = document.querySelector('app-dashboard');
    if (dashboardElement) {
      dashboardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
