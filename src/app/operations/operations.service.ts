import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from './operation-model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Operation[]> {
    return this.httpClient.get<Operation[]>('http://localhost:3000/operations');
  }
}
