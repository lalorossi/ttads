import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  public counterVale;
  public stepValue;

  onFirstPlusClicked(value){
  	console.log("Click1 -- " + value);
  	this.counterVale = value;
  }

  onSecondPlusClicked(value){
  	console.log("Click2 -- " + value);
  	this.stepValue = value;
  }

}
