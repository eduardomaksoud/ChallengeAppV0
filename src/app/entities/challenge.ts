import { DifficultyLevel } from '../enums/difficulty-level.enum';

export class Challenge {
  name?: string;
  difficultyLevel?: DifficultyLevel;
  description?: string;
  duration?: number;
  startedAt?: Date;
  githubLink?: string;

  constructor() {}
}
