import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [CommonModule, FormsRoutingModule],
})
export class FormsModule {}
