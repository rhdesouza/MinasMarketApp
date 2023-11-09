import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from 'src/app/common/external/material.module';
import { AnnouncementComponent } from './announcement.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
  ]
})
export class AnnouncementModule { }
