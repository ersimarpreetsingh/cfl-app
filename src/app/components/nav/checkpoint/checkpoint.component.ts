import { count, takeUntil } from 'rxjs/operators';
import { combineLatest, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckpointPricePipe } from './../../../pipes/checkpoint-price.pipe';
import { User } from './../../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../../api/app.service';
import { SnackbarService } from './../../../services/snackbar.service';
import { AccountType, Transaction } from './../../../models/transaction.model';
import { CheckpointService } from './../../../api/checkpoint.service';
import { Component, OnInit, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { Checkpoint, LifeEvent, Package } from 'src/app/models';
import { DomSanitizer } from '@angular/platform-browser';

declare function runChatScript(code: any): any;
declare function startSession(): any;
declare function stopSession(): any;
declare function showChatWindow(): any;
declare function hideChatWindow(): any;
declare function openChat(): any;
declare function activateTab(tabId: any): any;

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.scss']
})
export class CheckpointComponent implements OnInit, OnDestroy {
  unsubscribeAll!: Subject<any>;

  updateCounts = 0;

  checkpoint!: Checkpoint;
  AccountType = AccountType;
  user!: User;
  userAnswer!: boolean | undefined;
  isCorrect!: boolean | undefined;
  answered = true;
  hasLifehappend = false;
  isUserMilitary = false;
  canDoPartTime = false;
  requiredDegreeRank = 0;
  lifeEvent!: LifeEvent;
  creditScorePopup = false;
  grantValue = 0;
  randomPercent = 0;
  grantDisabled = false;

  degreesByRank = [{
    rank: 1,
    degree: 'A',
  }, {
    rank: 2,
    degree: 'B',
  }, {
    rank: 3,
    degree: 'M',
  }, {
    rank: 4,
    degree: 'JD',
  }, {
    rank: 5,
    degree: 'MD',
  }, {
    rank: 6,
    degree: 'PhD',
  }, {
    rank: 6,
    degree: 'DC',
  }, {
    rank: 6,
    degree: 'DO',
  }];

  creditForm = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required),
    q3: new FormControl('', Validators.required),
    q4: new FormControl('', Validators.required),
    q5: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private checkpointApi: CheckpointService,
    private snackbar: SnackbarService,
    private appApi: AppService,
    private sanitizer: DomSanitizer,
    private pricePipe: CheckpointPricePipe,
  ) { }

  ngOnInit(): void {
    console.log('on Init');
    this.answered = false;
    this.hasLifehappend = false;
    this.isUserMilitary = false;
    this.canDoPartTime = false;
    this.unsubscribeAll = new Subject();
    this.route.params.subscribe(params => {
      if (params.id) {
        if (this.unsubscribeAll) {
          this.unsubscribeAll.next();
          this.unsubscribeAll.complete();
          if (this.checkpoint) {
            hideChatWindow();
            stopSession();
          }
          this.unsubscribeAll = new Subject();
        }
        this.answered = true;
        this.updateCounts = 0;
        this.isCorrect = undefined;
        this.userAnswer = undefined;
        combineLatest([this.appApi.getUserListener(), this.checkpointApi.getCheckpointById(params.id)]).
          pipe(takeUntil(this.unsubscribeAll)).subscribe(res => {
            this.user = res[0];
            this.checkpoint = res[1].data;
            this.requiredDegreeRank = 0;
            if (this.user.transactions) {
              this.grantDisabled = this.user.transactions
                .findIndex(transaction => transaction.title === 'Scholarship Grant') > -1;
              console.log(this.grantDisabled);
              if (!this.grantDisabled) {
                const findEducationTransaction = this.user.transactions
                  .find(transaction => transaction.checkPoint && transaction.checkPoint.title === 'Education & Training');
                if (findEducationTransaction) {
                  this.randomPercent = ((Math.floor(Math.random() * (10 - 0 + 1) + 0)) * 10);
                  this.grantValue = (findEducationTransaction.cost * (this.randomPercent / 100));
                }
              }
            }
            this.requiredDegreeRank = 0;
            if (this.user.transactions) {
              this.grantDisabled = this.user.transactions
                .findIndex(transaction => transaction.title === 'Scholarship Grant') > -1;
              console.log(this.grantDisabled);
              if (!this.grantDisabled) {
                const findEducationTransaction = this.user.transactions
                  .find(transaction => transaction.checkPoint && transaction.checkPoint.title === 'Education & Training');
                if (findEducationTransaction) {
                  this.randomPercent = ((Math.floor(Math.random() * (10 - 0 + 1) + 0)) * 10);
                  this.grantValue = (findEducationTransaction.cost * (this.randomPercent / 100));
                }
              }
            }
            this.checkpoint.videoCode = this.sanitizer.bypassSecurityTrustHtml(this.checkpoint.videoCode ? this.checkpoint.videoCode : '');
            runChatScript(this.checkpoint.chatCode?.split(','));
            setTimeout(() => {
              startSession();
            }, 1000);
            if (this.user.lifeEventCheckpointStatus) {
              const checkpointIndex = this.checkpointApi.checkpoints.findIndex(checkPt => checkPt._id === this.checkpoint._id);
              const lifeHappenStatus = this.user.lifeEventCheckpointStatus.find(status => status.index === checkpointIndex);
              if (lifeHappenStatus) {
                this.lifeEvent = this.user.lifeEvents ? this.user.lifeEvents[this.user.lifeEventCheckpointStatus
                  .findIndex(status => lifeHappenStatus.index === status.index)] : undefined;
              }
              if (this.updateCounts < 1) {
                this.hasLifehappend = lifeHappenStatus ? !lifeHappenStatus.status : false;
                if (this.hasLifehappend) {
                  const transaction: Transaction = {
                    title: 'Life Happens',
                    lifeEvent: this.lifeEvent._id,
                    cost: this.lifeEvent.price,
                    accountUsed: this.lifeEvent.debitFrom ? this.lifeEvent.debitFrom : 'NONE',
                    debitFrom: this.lifeEvent.debitFrom ? this.lifeEvent.debitFrom : 'NONE',
                    creditTo: this.lifeEvent.creditTo ? this.lifeEvent.creditTo : 'NONE',
                  };
                  this.checkpointApi.transaction(transaction, lifeHappenStatus ? lifeHappenStatus.index : undefined).subscribe(res2 => {
                    if (res2.success) {
                      this.appApi.userDetail();
                    }
                  });
                }
              }
            }

            if (this.user.trueFalseAnswers) {
              if (this.updateCounts < 1) {
                this.answered = this.user.trueFalseAnswers.findIndex(ans => ans.checkpointId === this.checkpoint._id) > -1;
              }
            }
            this.requiredDegreeRank = this.degreesByRank.find(degree => degree.degree === this.user.profession.requiredDegree)?.rank || 0;
            this.isUserMilitary = this.user.profession.name === 'Armed Forces/Military';
            this.canDoPartTime = this.user.profession.grossAnnualSalary < 45000;

            const randomNo = (Number(((Math.random() * 10) + 1).toFixed()) % 3);
            this.creditScorePopup = (!this.user.creditScoreAnswer) && (randomNo === 0);
            this.updateCounts++;
            console.log(this.answered);
            console.log(this.updateCounts);
          });
      }
      this.appApi.userDetail();
    });
  }

  isPackDisabled(pack: Package): boolean {
    const packageIndex = this.user.transactions?.findIndex(transaction => transaction.package && pack._id === transaction.package._id);
    return (pack.forMilitary && !this.isUserMilitary) ||
      (this.checkpoint.title === 'Part-time Jobs' && !this.canDoPartTime) ||
      (this.checkpoint.title === 'Education & Training' &&
        !((this.degreesByRank.find(degree => degree.degree === pack.degreeKey)?.rank || 1) >= this.requiredDegreeRank)) ||
      (packageIndex !== undefined && packageIndex > -1);
  }

  answerTrueFalse(value: boolean): void {
    this.userAnswer = value;
    this.isCorrect = this.checkpoint.trueFalseQuestion.answer === value;
    if (this.checkpoint._id) {
      if (this.user.trueFalseAnswers) {
        this.user.trueFalseAnswers.push({ checkpointId: this.checkpoint._id, answer: this.userAnswer });
      } else {
        this.user.trueFalseAnswers = [{ checkpointId: this.checkpoint._id, answer: this.userAnswer }];
      }
    }
    this.appApi.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.appApi.setUser(res.data);
      }
    });
  }

  markAnswered(): void {
    this.answered = true;
  }

  transaction(packData: Package, accountUsed: string = ''): void {
    const transaction: Transaction = {
      package: packData._id,
      cost: packData.priceType === 'value' || packData.priceType === '' ? packData.price : Number(this.pricePipe.transform(packData)),
      accountUsed: packData.debitFrom ? packData.debitFrom : accountUsed,
      debitFrom: packData.debitFrom ? packData.debitFrom : accountUsed,
      creditTo: packData.creditTo ? packData.creditTo : 'NONE',
      useAllSavings: packData.useAllSavings,
      checkPoint: this.checkpoint._id,
    };
    if (!transaction.cost) {
      transaction.cost = 0;
    }
    this.checkpointApi.transaction(transaction).subscribe(res => {
      if (res.success) {
        if (!packData.hasAdditionalPricing) {
          this.appApi.userDetail();
          this.snackbar.show(res.message, true, 3000);
        }
        if (packData.hasAdditionalPricing) {
          const addTransaction: Transaction = {
            title: `${packData.title} (Additional)`,
            package: packData._id,
            cost: (packData.additionalPriceType === 'value' || packData.additionalPriceType === '') && packData.additioanlPrice ?
              packData.additioanlPrice :
              0,
            accountUsed: packData.additionalDebitFrom ? packData.additionalDebitFrom : accountUsed,
            debitFrom: packData.additionalDebitFrom ? packData.additionalDebitFrom : accountUsed,
            creditTo: packData.additionalCreditTo ? packData.additionalCreditTo : 'NONE',
            checkPoint: this.checkpoint._id,
          };
          this.checkpointApi.transaction(addTransaction).subscribe(res2 => {
            if (res2.success) {
              this.appApi.userDetail();
              this.snackbar.show(res2.message, true, 3000);
            }
          });
        }
      }
    });
  }

  lifeHappen(): void {
    this.hasLifehappend = false;
  }

  calcAccBalance(rate: number): number {
    return ((this.user.profession.grossAnnualSalary * (rate / 100)) * ((Math.pow(1 + (rate / 100), 40) - 1) / (rate / 100)));
  }

  submitCreditForm(): void {
    if (this.creditForm.valid) {
      this.user.creditScoreAnswer = this.creditForm.value;
      const currentScore = this.user.creditScore || 0;
      this.appApi.updateUser(this.user).subscribe(res => {
        if (res.success) {
          this.appApi.setUser(res.data);
          if (currentScore < (res?.data?.creditScore || 0)) {
            this.snackbar.show('Congratulations! 50 points added to your credit score', true, 3000);
          } else {
            this.snackbar.show('Sorry! You were not able to answer three of them correctly', false, 3000);
          }
        }
      });
    }
  }

  openChat(): void {
    showChatWindow();
    openChat();
  }

  ngOnDestroy(): void {
  }

  applyGrant(): void {
    const transaction: Transaction = {
      title: 'Scholarship Grant',
      cost: this.grantValue,
      accountUsed: 'CA',
      debitFrom: 'NONE',
      creditTo: 'CA',
    };
    this.checkpointApi.transaction(transaction).subscribe(res => {
      if (res.success) {
        this.appApi.userDetail();
        this.snackbar.show(res.message, true, 3000);
      }
    });
  }

  changeTab(tabId: string): void {
    activateTab(tabId);
  }

}
