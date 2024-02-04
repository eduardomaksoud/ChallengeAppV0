import { Injectable } from '@angular/core';
import { Challenge } from '../entities/challenge';
import { DifficultyLevel } from '../enums/difficulty-level.enum';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  challenges?: Challenge[];

  addChallenge(challenge: Challenge): void {
    this.challenges?.push(challenge);
  }

  getMockChallenges(): Challenge[] {
    // Create an array of mock challenges
    return (this.challenges = [
      {
        name: 'Challenge 1',
        difficultyLevel: DifficultyLevel.Easy,
        description:
          'Challenge 1 is a beginner-level task that focuses on building basic skills in programming. The challenge covers topics like data types, loops, and functions. It is a great starting point for those who are new to coding.',
        duration: 4,
        startedAt: new Date(),
        githubLink: 'https://github.com/example/challenge-1',
      },
      {
        name: 'Challenge 2',
        difficultyLevel: DifficultyLevel.Medium,
        description:
          'Challenge 2 is an intermediate-level task that involves solving problems related to algorithms and data structures. Participants will need to demonstrate a good understanding of concepts such as arrays, linked lists, and sorting algorithms.',
        duration: 4,
        startedAt: new Date(),
        githubLink: 'https://github.com/example/challenge-2',
      },
    ]);
  }
}
