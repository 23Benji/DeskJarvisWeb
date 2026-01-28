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
      title: 'Modular Architecture',
      desc: 'Every widget is an independent module. Add, remove, or customize to match your workflow.',
      icon: 'fa-layer-group',
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/20',
      border: 'hover:border-cyan-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
    },
    {
      title: 'Drag & Drop',
      desc: 'Powered by Angular CDK. Move widgets anywhere on your workspace with precision.',
      icon: 'fa-arrows-up-down-left-right',
      color: 'text-purple-400',
      bg: 'bg-purple-900/20',
      border: 'hover:border-purple-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
    },
    {
      title: 'Fully Resizable',
      desc: 'Each widget adapts to any size. From compact status indicators to full-screen dashboards.',
      icon: 'fa-expand',
      color: 'text-orange-400',
      bg: 'bg-orange-900/20',
      border: 'hover:border-orange-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]'
    },
    {
      title: 'Cyberpunk Aesthetics',
      desc: 'Dark glassmorphism, neon accents, and sci-fi typography. Designed for the future.',
      icon: 'fa-palette',
      color: 'text-red-400',
      bg: 'bg-red-900/20',
      border: 'hover:border-red-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(248,113,113,0.2)]'
    },
    {
      title: 'Deep Customization',
      desc: 'Configure colors, layouts, and behaviors. Make it truly yours.',
      icon: 'fa-sliders', // or fa-gear
      color: 'text-green-400',
      bg: 'bg-green-900/20',
      border: 'hover:border-green-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]'
    },
    {
      title: 'Local First',
      desc: 'Your data stays on your device. No cloud dependencies, complete privacy.',
      icon: 'fa-shield-halved',
      color: 'text-blue-400',
      bg: 'bg-blue-900/20',
      border: 'hover:border-blue-400/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]'
    }
  ];
}
