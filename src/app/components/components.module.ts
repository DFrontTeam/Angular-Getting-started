import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentsComponent, ChildComponent],
  imports: [CommonModule, ComponentsRoutingModule, FormsModule],
})
export class ComponentsModule {}
