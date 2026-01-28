import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  features = [
    {
      title: 'Interactive Dashboard',
      desc: 'Fully modular workspace powered by @angular/cdk. Drag, drop, and organize widgets to build your perfect layout.',
      icon: 'fa-table-columns', // Dashboard icon
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/20',
      border: 'hover:border-cyan-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
    },
    {
      title: 'Smart Widgets',
      desc: 'AI Center, Music Player, and Real-time Weather. Hide clutter in the Toolbox and pin your favorite visuals.',
      icon: 'fa-brain', // AI/Smart icon
      color: 'text-purple-400',
      bg: 'bg-purple-900/20',
      border: 'hover:border-purple-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
    },
    {
      title: 'Arcade Hub',
      desc: 'Powered by Kaplay.js. Switch tabs to play retro classics like Duck Hunt and Tetris directly in your workflow.',
      icon: 'fa-gamepad', // Gaming icon
      color: 'text-orange-400',
      bg: 'bg-orange-900/20',
      border: 'hover:border-orange-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]'
    },
    {
      title: 'Cinematic UX',
      desc: 'Immersive Matrix rain effects, cinematic intro sequences, and interactive tutorials for guided onboarding.',
      icon: 'fa-eye', // Visual icon
      color: 'text-green-400',
      bg: 'bg-green-900/20',
      border: 'hover:border-green-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]'
    },
    {
      title: 'Angular 20 Core',
      desc: 'Built on the bleeding edge. Standalone components, Vite build tool, and RxJS for reactive state management.',
      icon: 'fa-code', // Code icon
      color: 'text-red-400',
      bg: 'bg-red-900/20',
      border: 'hover:border-red-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(248,113,113,0.2)]'
    },
    {
      title: 'Persistent State',
      desc: 'Smart routing logic remembers your progress. Skip the Intro or Tutorial automatically if you\'ve been here before.',
      icon: 'fa-memory', // Memory/Chip icon
      color: 'text-blue-400',
      bg: 'bg-blue-900/20',
      border: 'hover:border-blue-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]'
    }
  ];
}
