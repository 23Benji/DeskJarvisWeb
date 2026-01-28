import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero";
import { DashboardComponent } from "./components/dashboard/dashboard";
import { FeaturesComponent } from "./components/features/features";
import { RetroGamingComponent } from "./components/retro-gaming/retro-gaming";
import { Hardware } from "./components/hardware/hardware";
import { Footer } from "./components/footer/footer";
import { ParticlesComponent } from "./components/particles/particles";
import { BootComponent } from "./components/boot/boot";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, DashboardComponent, FeaturesComponent, RetroGamingComponent, Hardware, Footer, ParticlesComponent, BootComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('desk-jarvis');

  isBooting = signal(true);

  finishBoot() {
    this.isBooting.set(false);
  }
}
