import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesRoutingModuleModule } from './directives-routing.module';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [DirectivesComponent],
  imports: [CommonModule, DirectivesRoutingModuleModule],
})
export class DirectivesModule {}
