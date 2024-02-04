// timer.component.ts

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() durationInHours: number = 0; // Duration in hours
  timeRemaining: number = 0;
  isPaused: boolean = true;
  private timerSubscription!: Subscription;

  ngOnInit() {
    this.resetTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.isPaused = false;
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.stopTimer();
      }
    });
  }

  pauseTimer() {
    this.isPaused = true;
    this.stopTimer();
  }

  resetTimer() {
    this.isPaused = true;
    // Convert hours to seconds for the timer
    this.timeRemaining = this.durationInHours * 3600;
    this.stopTimer();
  }

  formatTime(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600);
    const remainingMinutes: number = Math.floor((seconds % 3600) / 60);
    const remainingSeconds: number = seconds % 60;

    const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes: string = remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
    const formattedSeconds: string = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  private stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
