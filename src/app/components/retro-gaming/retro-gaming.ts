import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retro-gaming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retro-gaming.html',
  styleUrls: ['./retro-gaming.css']
})
export class RetroGamingComponent {
  // The currently selected game ID
  activeGame = signal('tetris');

  games = [
    {
      id: 'tetris',
      name: 'TETRIS',
      desc: 'Arrow keys to move & rotate',
      icon: 'fa-cubes',
      color: 'border-sci-cyan text-sci-cyan',
      glow: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]'
    },
    {
      id: 'duck',
      name: 'DUCK HUNT',
      desc: 'Mouse to aim & click to shoot',
      icon: 'fa-crosshairs',
      color: 'border-sci-orange text-sci-orange',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.4)]'
    },
    {
      id: 'pong',
      name: 'PONG',
      desc: 'W/S or Arrow keys',
      icon: 'fa-table-tennis-paddle-ball',
      color: 'border-sci-purple text-sci-purple',
      glow: 'shadow-[0_0_15px_rgba(139,92,246,0.4)]'
    }
  ];

  // Function to switch games
  selectGame(gameId: string) {
    this.activeGame.set(gameId);
  }
}
