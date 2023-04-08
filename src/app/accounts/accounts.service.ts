import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account-model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('http://localhost:3000/accounts')
  }
}
