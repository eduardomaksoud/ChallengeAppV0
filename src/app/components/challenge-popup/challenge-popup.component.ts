// challenge-popup.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Challenge } from '../../entities/challenge';

@Component({
  selector: 'app-challenge-popup',
  templateUrl: './challenge-popup.component.html',
  styleUrls: ['./challenge-popup.component.scss']
})
export class ChallengePopupComponent {
  @Output() challengeCreated = new EventEmitter<Challenge>();
  @Output() popupClosed = new EventEmitter<void>();

  challengeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.challengeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  createChallenge() {
    if (this.challengeForm.valid) {
      const newChallenge: Challenge = this.challengeForm.value;

      this.challengeCreated.emit(newChallenge);
      this.closePopup();
    } else {
      // Handle form validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }

  closePopup() {
    // Add any additional logic to close the popup
    this.popupClosed.emit();
  }

  preventClosing(event: Event): void {
    event.stopPropagation();
  }
}
