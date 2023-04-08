import { Component } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operation } from '../operation-model';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  operations: Operation[] = []

  constructor(private operationsService: OperationsService) {
    this.operationsService.get()
      .subscribe(res => {
        this.operations = res;
      })
  }
}
