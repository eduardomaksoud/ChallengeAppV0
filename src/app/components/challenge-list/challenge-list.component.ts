import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Challenge } from '../../entities/challenge';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrl: './challenge-list.component.scss',
})
export class ChallengeListComponent implements OnInit {
  challenges?: Challenge[];
  @Output() challengeSelected = new EventEmitter<Challenge>();

  constructor(private mockChallengeService: ChallengeService) {}

  ngOnInit(): void {
    this.challenges = this.mockChallengeService.getMockChallenges();
  }

  onSelectChallenge(challenge: Challenge): void {
    this.challengeSelected.emit(challenge);
  }
}
