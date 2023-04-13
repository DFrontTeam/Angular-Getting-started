import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent {

  value:string;
  showChild:boolean;

  constructor() {
    this.value = "hola";
    this.showChild = true;
  }

  /**
   * recibe el evento con el valor enviado del componente hijo y lo iguala a la variable value
   * @param event
   */
  getValueChild(event:string):void{
    this.value = event;
  }

  /**
   * mostrar u ocultar componente hijo
   */
  toggleChild():void{
    this.showChild = !this.showChild;
  }

}
