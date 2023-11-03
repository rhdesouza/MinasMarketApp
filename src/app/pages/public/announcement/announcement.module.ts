import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/external/material.module';
import { AnnouncementComponent } from './announcement.component';


@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class AnnouncementModule { }
