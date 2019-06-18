import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  public counterValue;
  public stepValue;
  public counterText;

  onFirstCounterClicked(value) {
    console.log('Click1 -- ' + value);
    this.counterValue = value;
    this.counterText = '';
    for (let i = 0; i < this.counterValue; i++ ) {
      this.counterText += '-';
    }
  }

  onSecondCounterClicked(value) {
    console.log('Click2 -- ' + value);
    this.stepValue = value;
  }

  onThirdCounterChange(value) {
    console.log('Cambia el 3ero: ' + value);
  }
}
