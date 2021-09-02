import { CheckpointService } from './../../../api/checkpoint.service';
import { environment } from './../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Transaction, AccountType } from './../../../models/transaction.model';
import { AppService } from '../../../api/app.service';
import { User } from '../../../models/user.model';
import { Component, OnInit } from '@angular/core';

declare function runChatScript(code: any): any;
declare function startSession(): any;
declare function stopSession(): any;
declare function showChatWindow(): any;
declare function hideChatWindow(): any;
declare function openChat(): any;
declare function openChatContainer(): any;

@Component({
  selector: 'app-d-profile',
  templateUrl: './d-profile.component.html',
  styleUrls: ['./d-profile.component.scss']
})
export class DProfileComponent implements OnInit {
  checkingAccTransactions: any[] | undefined = [];
  savingAccTransactions: any[] | undefined = [];
  ccTransactions: any[] | undefined = [];
  retirementTransactions: any[] | undefined = [];
  user!: User | undefined;
  transferType = '';
  transferAmt = 0;
  alldone = false;
  sharableLink = '';
  constructor(private appApi: AppService, private route: ActivatedRoute, private checkpointApi: CheckpointService) {
    this.user = this.appApi.getUser();
    this.checkingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CA' || trans.creditTo === 'CA');
    this.savingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'SA' || trans.creditTo === 'SA');
    this.ccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CC' || trans.creditTo === 'CC');
    this.retirementTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'RA' || trans.creditTo === 'RA');
  }

  ngOnInit(): void {
    this.appApi.getUserListener().subscribe(res => {
      console.log(res);
      this.user = res;
      this.checkingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CA' || trans.creditTo === 'CA');
      this.savingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'SA' || trans.creditTo === 'SA');
      this.ccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CC' || trans.creditTo === 'CC');
      this.retirementTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'RA' || trans.creditTo === 'RA');
    });
    this.route.queryParams.subscribe(params => {
      this.alldone = Boolean(params.alldone);
      if (this.alldone) {
        runChatScript('');
        setTimeout(() => {
          startSession();
        }, 1000);
        setTimeout(() => {
          openChatContainer();
        }, 1000);
      }
    });
  }

  deleteTransaction(id: string): void {
    this.checkpointApi.deleteTransaction(id).subscribe(res => {
      if (res.success) {
        this.appApi.userDetail();
      }
    });
  }

  transfer(): void {
    let transaction: Transaction | undefined;
    switch (this.transferType) {
      case 'S2C':
        transaction = {
          title: 'Transafer (Savings - Checking)',
          accountUsed: 'SA',
          debitFrom: 'SA',
          creditTo: 'CA',
          cost: this.transferAmt,
        };
        break;
      case 'C2S':
        transaction = {
          title: 'Transafer (Checking - Savings)',
          accountUsed: 'CA',
          debitFrom: 'CA',
          creditTo: 'SA',
          cost: this.transferAmt,
        };
        break;
    }
    if (transaction) {
      this.checkpointApi.transaction(transaction).subscribe(res => {
        if (res.success) {
          this.appApi.userDetail();
          this.transferType = '';
          this.transferAmt = 0;
        }
      });
    }
  }

}
