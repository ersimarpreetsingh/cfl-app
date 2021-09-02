import { User } from './../../../models/user.model';
import { AppService } from './../../../api/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-modals',
  templateUrl: './warning-modals.component.html',
  styleUrls: ['./warning-modals.component.scss']
})
export class WarningModalsComponent implements OnInit {
  isCheckingBelow500 = false;
  isSavingsBelow500 = false;
  isCreditOverUsed = false;
  isCredit30 = false;
  user!: User;
  constructor(private appApi: AppService) { }

  ngOnInit(): void {

    this.appApi.getUserListener().subscribe(user => {
      this.user = user;
      this.isCheckingBelow500 = user && user.checkingAcc ? user.checkingAcc <= 500 : false;
      this.isSavingsBelow500 = user && user.savingAcc ? user.savingAcc <= 500 : false;
      this.isCreditOverUsed = user && user.creditCard && user.creditCardLimit ?
        user.creditCard > (user.creditCardLimit * 0.5) :
        false;
      this.isCredit30 = user && user.creditCard && user.creditCardLimit ?
        user.creditCard > (user.creditCardLimit * 0.7) :
        false;
    });
  }

  closeChecking(): void {
    this.user.warningStatus.checkingBelow500 = true;
    this.isCheckingBelow500 = false;
    this.appApi.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.appApi.setUser(res.data);
      }
    });
  }

  closeSaving(): void {
    this.user.warningStatus.savingsBelow500 = true;
    this.isSavingsBelow500 = false;
    this.appApi.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.appApi.setUser(res.data);
      }
    });
  }

  closeCreditOveruse(): void {
    this.isCreditOverUsed = false;
    this.user.warningStatus.creditOverReliance = true;
    this.appApi.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.appApi.setUser(res.data);
      }
    });
  }

  closeCredit30(): void {
    this.isCredit30 = false;
    this.user.warningStatus.creditLeft30 = true;
    this.appApi.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.appApi.setUser(res.data);
      }
    });
  }

}
