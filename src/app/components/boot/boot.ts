import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot.html',
  styleUrls: ['./boot.css']
})
export class BootComponent implements OnInit, OnDestroy {
  @Output() bootComplete = new EventEmitter<void>();

  progress = 0;
  logs: string[] = [];

  // Store timers so we can stop them
  private logInterval: any;
  private progressInterval: any;

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

  ngOnDestroy() {
    this.clearTimers();
  }

  runBootSequence() {
    let logIndex = 0;

    // 1. Logs Timer
    this.logInterval = setInterval(() => {
      if (logIndex < this.systemLogs.length) {
        this.logs.push(this.systemLogs[logIndex]);
        logIndex++;
      }
    }, 400);

    // 2. Progress Bar Timer
    this.progressInterval = setInterval(() => {
      this.progress += Math.random() * 5;
      if (this.progress >= 100) {
        this.finishBoot();
      }
    }, 150);
  }

  // logic to stop everything and finish immediately
  skipBoot() {
    this.clearTimers();
    this.progress = 100;
    this.bootComplete.emit();
  }

  private finishBoot() {
    this.progress = 100;
    this.clearTimers();
    setTimeout(() => {
      this.bootComplete.emit();
    }, 500);
  }

  private clearTimers() {
    if (this.logInterval) clearInterval(this.logInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
  }
}
