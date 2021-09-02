import { ActivatedRoute } from '@angular/router';
import { User } from './../models/user.model';
import { AppService } from './../api/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  checkingAccTransactions: any[] | undefined = [];
  savingAccTransactions: any[] | undefined = [];
  ccTransactions: any[] | undefined = [];
  user!: User | undefined;
  alldone = false;
  sharableLink = '';
  constructor(private appApi: AppService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.appApi.getPublicProfile(params.id).subscribe(res => {
        if (res.success) {
          this.user = res.data;
          this.checkingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CA' || trans.creditTo === 'CA');
          this.savingAccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'SA' || trans.creditTo === 'SA');
          this.ccTransactions = this.user?.transactions?.filter(trans => trans.debitFrom === 'CC' || trans.creditTo === 'CC');
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
