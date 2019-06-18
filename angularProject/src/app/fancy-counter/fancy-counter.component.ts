import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fancy-counter',
  templateUrl: './fancy-counter.component.html',
  styleUrls: ['./fancy-counter.component.css']
})
export class FancyCounterComponent implements OnInit {

  @Input() counterText = '';

  constructor() { }

  ngOnInit() {
  }

}
