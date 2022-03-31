import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    console.log("start button click");

    this.timerId = setInterval(() => {
      console.log("tick");
      this.counter = this.counter + 1;
      this.counterChanged.emit(this.counter);
    }, 1000);
  }

  stop() {
    console.log("stop button click");
    this.timerId = clearInterval(this.timerId);
  }

  timerId: any;
  counter: number = 0;

  @Output() counterChanged = new EventEmitter<number>();
}
