import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {

  value:string;

  constructor() {
    this.value = "hola";
  }

  /**
   * recibe el evento con el valor enviado del componente hijo y lo iguala a la variable value
   * @param event
   */
  getValueChild(event:string):void{
    this.value = event;
  }

}
