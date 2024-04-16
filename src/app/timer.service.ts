import { Injectable } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer$ = timer(0, 1000);
  private destroy$ = new Subject<void>();
  private elapsedTime = 0;
  private isRunning = false;

  timerValue$ = new Subject<number>();

  constructor() {}

  startTimer() {
    console.log('start');
    
    // if (!this.isRunning) {
    //   this.timer$.pipe(takeUntil(this.destroy$)).subscribe(() => {
    //     this.elapsedTime++;
    //     this.timerValue$.next(this.elapsedTime);
    //   });
    //   this.isRunning = true;
    //   console.log(this.timerValue$);  
    // }

    if (!this.isRunning) {
      interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.elapsedTime++;
        console.log('Elapsed time:', this.elapsedTime); // Add this line for debugging
        this.timerValue$.next(this.elapsedTime);
      });
      this.isRunning = true;
    }
  }

  // pauseTimer() {
  //   this.destroy$.next();
  //   this.isRunning = false;
  // }

  // resumeTimer() {
  //   this.startTimer();
  // }

  // resetTimer() {
  //   this.destroy$.next();
  //   this.elapsedTime = 0;
  //   this.timerValue$.next(this.elapsedTime);
  //   this.isRunning = false;
  // }

  getElapsedTime(): number {
    return this.elapsedTime;
  }
}
