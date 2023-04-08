import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    AccountsComponent
  ]
})
export class AccountsModule { }
