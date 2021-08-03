import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../Transaction';
import {data} from '../../mock-transactions';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions : Transaction[] = data;
  constructor() { }

  ngOnInit(): void {
  }

}
