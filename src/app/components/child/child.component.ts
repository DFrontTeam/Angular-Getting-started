import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() valueSend:EventEmitter<string> = new EventEmitter();
  @Input() valueChild:string;

  constructor() {
    this.valueChild = "";
  }

  send():void{
    this.valueSend.emit(this.valueChild);
  }

}
