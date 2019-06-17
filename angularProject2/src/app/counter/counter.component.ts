import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

	// El decorador @Imput permite que se tome un valor "por parámtero" para la variable
	// Si se le pone igual a la variable con @Imput, es el valor por defecto
	// Los inputs los toma desde el HTML, poniendo [count]=... dentro del componente
	// Las variables que se tengann que usar después en el HTML tienen que ser public
	@Input() count = 0;
	@Input() step = 1;

	@Output() evtPlus = new EventEmitter();
	@Output() evtMinus = new EventEmitter();

	constructor() { }

	onPlusClick(){
		this.count += this.step;
		this.evtPlus.emit(this.count);
	}

	onMinusClick(){
		this.count -= this.step;
		this.evtPlus.emit(this.count);
	}

	ngOnInit() {
	}

}
