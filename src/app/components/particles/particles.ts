import { Component, ElementRef, HostListener, NgZone, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  // We use 'fixed' to cover the whole window, and 'top-0 left-0' to pin it
  template: `<canvas #canvas class="fixed top-0 left-0 block pointer-events-none -z-10"></canvas>`,
  styles: []
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private animationId: number = 0;

  // Configuration
  private readonly particleCount = 80;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // Run outside Angular to prevent performance issues
    this.ngZone.runOutsideAngular(() => {
      this.initCanvas();
      this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }

  @HostListener('window:resize')
  resize(): void {
    this.setCanvasSize();
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');

    // Set initial size
    this.setCanvasSize();

    // Create particles
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height));
    }
  }

  private setCanvasSize(): void {
    const canvas = this.canvasRef.nativeElement;

    // Get the pixel ratio (1 for standard, 2 for Retina, etc.)
    const dpr = window.devicePixelRatio || 1;

    // 1. Set the CSS display size (what you see)
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    // 2. Set the actual bitmap size (resolution) scaled by DPR
    // This is the magic fix for stretching/blurriness
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    // 3. Normalize coordinate system so we can just use regular pixels in our math
    if (this.ctx) this.ctx.scale(dpr, dpr);
  }

  private animate(): void {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;

    // Use logical width/height for calculations (not the multiplied dpr width)
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear the canvas
    this.ctx.clearRect(0, 0, width, height);

    // Draw
    this.particles.forEach(p => {
      p.update(width, height);
      p.draw(this.ctx!);
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Particle Class
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;

  constructor(w: number, h: number) {
    // Initialize anywhere on screen
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    // Velocity
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    // Size
    this.size = Math.random() * 2 + 0.5;
    this.alpha = Math.random() * 0.4 + 0.1;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen edges
    if (this.x < 0) this.x = w;
    if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h;
    if (this.y > h) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(148, 163, 184, ${this.alpha})`;
    ctx.fill();
  }
}
