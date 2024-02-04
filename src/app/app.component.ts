import { Component } from '@angular/core';
import { Challenge } from './entities/challenge';
import { ChallengeService } from './services/challenge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'challenge-app-v0';
  isPopupOpen = false;
  selectedChallenge!: Challenge;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.selectedChallenge = this.challengeService.getMockChallenges()[0];
  }

  onSelectedChallenge(challenge: Challenge): void {
    this.selectedChallenge = challenge;
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  handleChallengeCreated(challenge: Challenge) {
    // Add logic to handle the created challenge, e.g., push it to the list
    // challenges.push(challenge);
    this.challengeService.addChallenge(challenge);
    this.closePopup();
  }
}
