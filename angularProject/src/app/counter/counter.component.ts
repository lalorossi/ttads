import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // El decorador @Input permite que se tome un valor "por parámetro" para la variable
  // Si se le pone igual a la variable con @Input, es el valor por defecto
  // Los inputs los toma desde el HTML, poniendo [count]=... dentro del componente
  // Las variables que se tengan que usar después en el HTML tienen que ser public
  @Input() count = 0;
  @Input() step = 1;

  @Output() evtChangeValue = new EventEmitter();

  constructor() { }

  onPlusClick() {
    this.count += this.step;
    this.evtChangeValue.emit(this.count);
  }

  onMinusClick() {
    this.count -= this.step;
    this.evtChangeValue.emit(this.count);
  }

  ngOnInit() {
  }

}
