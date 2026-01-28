import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot.html',
  styleUrls: ['./boot.css']
})
export class BootComponent implements OnInit {
  @Output() bootComplete = new EventEmitter<void>();

  progress = 0;
  logs: string[] = [];

  // The fake "startup" script
  private systemLogs = [
    'INITIALIZING KERNEL...',
    'LOADING MODULES: [CORE, UI, NETWORK]...',
    'CHECKING MEMORY INTEGRITY... OK',
    'MOUNTING VIRTUAL FILESYSTEM...',
    'ESTABLISHING SECURE CONNECTION...',
    'ACCESSING NEURAL INTERFACE...',
    'SYSTEM ONLINE.'
  ];

  ngOnInit() {
    this.runBootSequence();
  }

  runBootSequence() {
    let logIndex = 0;

    // 1. Add logs one by one
    const logInterval = setInterval(() => {
      if (logIndex < this.systemLogs.length) {
        this.logs.push(this.systemLogs[logIndex]);
        logIndex++;
      }
    }, 400);

    // 2. Smooth Progress Bar
    const progressInterval = setInterval(() => {
      this.progress += Math.random() * 5; // Random jump
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(progressInterval);
        clearInterval(logInterval);

        // 3. Wait a moment at 100% then finish
        setTimeout(() => {
          this.bootComplete.emit(); // Tell App component we are done
        }, 800);
      }
    }, 150);
  }
}
