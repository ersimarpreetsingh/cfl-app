import { Transaction } from './../../../models/transaction.model';
import { SnackbarService } from './../../../services/snackbar.service';
import { environment } from './../../../../environments/environment';
import { LifeEventService } from './../../../api/life-event.service';
import { CheckpointService } from './../../../api/checkpoint.service';
import { Checkpoint, LifeEvent } from 'src/app/models';
import { AppService } from './../../../api/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '');
  allEvents: LifeEvent[] = [];
  checkpoints: Checkpoint[] = [];
  alldone = false;
  displayAllDone = true;
  creditTransfer = false;
  creditAmt = 0;

  sharableLink = '';
  constructor(
    private appApi: AppService,
    private checkpointApi: CheckpointService,
    private lifeEventApi: LifeEventService,
    private router: Router,
    private clipboard: ClipboardService,
    private snackbar: SnackbarService,
  ) {
  }

  ngOnInit(): void {
    combineLatest([this.appApi.getUserListener(), this.checkpointApi.getCheckpointListListener()]).subscribe(res => {
      this.user = res[0];
      this.checkpoints = res[1];
      if (this.checkpoints?.length && this.user?.profession) {
        this.checkpoints.forEach(checkpoint => {
          if (checkpoint.title === 'Planning for the Future') {
            checkpoint.completed = this.user?.transactions
              .findIndex((trans: any) => trans.package && trans.package.parentId === '604f9f67ac92685dec3a81b5') > -1;
          } else {
            checkpoint.completed = this.user?.transactions.findIndex((trans: any) => trans.checkPoint?._id === checkpoint._id) > -1 ||
              this.user.profession.grossAnnualSalary >= 45000 && checkpoint.title === 'Part-time Jobs';
          }
        });
        this.alldone = !(this.checkpoints.findIndex(checkpoint => !checkpoint.completed) > -1);
      }
    });

    this.appApi.userDetail();
    this.checkpointApi.getCheckpoints();
    this.lifeEventApi.getLifeEvents();
  }

  routeToProfile(): void {
    this.hideAllDonePopup();
    this.router.navigateByUrl('nav/profile');
  }
  routeToChat(): void {
    this.hideAllDonePopup();
    this.router.navigateByUrl('nav/profile?alldone=true');
  }

  hideAllDonePopup(): void {
    this.displayAllDone = false;
  }

  clickCheckbox(ev: Event): void {
    ev.preventDefault();
  }

  print(): void {
    const node = document.getElementById('print-section');

    let img: any;
    let filename: any;
    let newImage: any;

    if (node) {

      domtoimage.toPng(node, { bgcolor: '#fff' })

        .then((dataUrl) => {
          img = new Image();
          img.src = dataUrl;
          newImage = img.src;

          img.onload = () => {
            const pdfWidth: any = img.width;
            const pdfHeight: any = img.height + 100;
            // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

            let doc;

            if (pdfWidth > pdfHeight) {
              doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
            }
            else {
              doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
            }
            const width: any = doc.internal.pageSize.getWidth();
            const height: any = doc.internal.pageSize.getHeight();
            doc.addImage(newImage, 'PNG', 10, 10, width, height - 100);
            filename = 'mypdf_' + '.pdf';
            doc.save(filename);
          };
        })
        .catch((error) => {

          // Error Handling

        });
    }
  }

  copyProfileLink(): void {
    if (this.alldone) {
      this.appApi.generatePublicLink().subscribe(resp => {
        if (resp.success) {
          this.sharableLink = `${environment.baseURL}profile/${resp.data}`;
          if (this.sharableLink && this.sharableLink.length) {
            this.clipboard.copy(this.sharableLink);
            this.snackbar.show('Your profile link is copied to clipboard and is accesible for 30 minutes.', true, 3000);
          }
        }
      });
    }
  }

  doCreditTransfer(): void {
    if (this.creditAmt && this.creditAmt < 1) {
      return;
    }
    const transaction: Transaction = {
      title: 'Payment on Credit Card',
      accountUsed: 'CA',
      debitFrom: 'CA',
      creditTo: 'CC',
      cost: this.creditAmt,
    };
    this.checkpointApi.transaction(transaction).subscribe(res => {
      if (res.success) {
        this.appApi.userDetail();
        this.creditTransfer = false;
        this.creditAmt = 0;
      }
    });
  }
}
