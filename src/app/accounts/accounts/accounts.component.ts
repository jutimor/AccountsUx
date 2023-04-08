import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../account-model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  accounts: Account[] = []

  /**
   *
   */
  constructor(private accountsService: AccountsService) {
    this.accountsService.get()
      .subscribe((res) => {
        this.accounts = res;
      })
  }
}
