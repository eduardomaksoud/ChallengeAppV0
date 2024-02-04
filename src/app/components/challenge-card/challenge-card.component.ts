// challenge-card.component.ts

import { Component, Input } from '@angular/core';
import { Challenge } from '../../entities/challenge';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent {
  @Input() selectedChallenge!: Challenge;
  showTimer: boolean = false; // Flag to control the visibility of the timer
  
  onGoClick() {
    // Set the flag to true to display the timer
    this.showTimer = true;
  }
}
