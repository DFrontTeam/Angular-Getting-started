import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() valueChild:string;
  @Output() valueSend:EventEmitter<string>;

  constructor() {
    this.valueChild = "";
    this.valueSend = new EventEmitter();
  }

  /**
   * mensaje por consola cuando el componente se inicialize
   */
  ngOnInit(): void {
      console.log("Componente inicializado")
  }

  /**
   * mensaje por consola cuando el componente desaparezca
   */
  ngOnDestroy():void{
    console.log("Componente destruido");
  }

  /**
   * mensaje por consola cuando detecte cambios en el componente como un input entrante de un componente padre
   */
  ngOnChanges():void{
    console.log("cambios en el componente");
  }

  /**
   * emite un evento con el valor del input al componente padre
   */
  send():void{
    this.valueSend.emit(this.valueChild);
  }

}
