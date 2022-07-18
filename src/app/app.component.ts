import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  isActivated = false;

  generate() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '*#!?$()';

    if (
      (!this.includeLetters && !this.includeNumbers && !this.includeSymbols) ||
      this.length === 0
    ) {
      return;
    } else {
      let validChars = '';

      if (this.includeLetters) {
        validChars += letters;
      }
      if (this.includeNumbers) {
        validChars += numbers;
      }
      if (this.includeSymbols) {
        validChars += symbols;
      }

      let generatedPassword = '';
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
      }

      this.password = generatedPassword;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onLengthInput(value: string) {
    let parsedValue = parseInt(value);
  }

  validation() {
    return (!this.includeLetters &&
      !this.includeNumbers &&
      !this.includeSymbols) ||
      this.length === 0
      ? true
      : false;
  }

  activate() {
    this.isActivated = !this.isActivated;
  }
}
