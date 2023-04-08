import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations/operations.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OperationsComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    OperationsComponent
  ]
})
export class OperationsModule { }
