import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { MaterialModule } from 'src/app/common/external/material.module';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
