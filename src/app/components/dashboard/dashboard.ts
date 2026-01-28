import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  // Real-time clock signal (static for now, can be made live later)
  time = signal('14:32:07');
  date = signal('TUESDAY, JAN 21');

  // Widget Data
  notes = [
    'Project deadline: Friday',
    'Review design specs'
  ];

  todos = [
    { text: 'Configure workspace', done: true },
    { text: 'Test projector setup', done: false },
    { text: 'Deploy to Pi', done: false }
  ];

  games = [
    { name: 'TETRIS', icon: 'fa-cubes', color: 'text-cyan-400' },
    { name: 'DUCK HUNT', icon: 'fa-bullseye', color: 'text-orange-400' },
    { name: 'PONG', icon: 'fa-table-tennis-paddle-ball', color: 'text-purple-400' }
  ];
}
