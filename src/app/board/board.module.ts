import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BoardRoutingModule } from './board-routing.module';
import { OperationsModule } from '../operations/operations.module';
import { AccountsModule } from '../accounts/accounts.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    OperationsModule,
    AccountsModule,
  ]
})
export class BoardModule { }
