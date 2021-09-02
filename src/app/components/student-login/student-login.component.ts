import { SnackbarService } from './../../services/snackbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { AuthApiService } from '../../api/auth-api.service';
import { AppService } from '../../api/app.service';
import { AuthTokens } from '../../models';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<any> = new Subject();
  studentLoginForm = new FormGroup({
    schoolCode: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    public authApiService$: AuthApiService,
    public appService$: AppService,
    public router: Router,
    private snackbar: SnackbarService
  ) {
  }

  ngOnInit(): void {
    this.appService$.getUserListener().pipe(takeUntil(this.unsubscribeAll)).subscribe(res => {
      if (res.profession) {
        this.router.navigateByUrl('nav/profile');
      } else {
        this.router.navigateByUrl('nav/professions');
      }
    });
  }

  get f(): {
    [key: string]: AbstractControl
  } { return this.studentLoginForm.controls; }

  onSubmit(): void {
    if (this.studentLoginForm.valid) {
      this.authApiService$.studentlogin(this.studentLoginForm.value).subscribe(rlt => {
        if (rlt.success) {
          const token: AuthTokens = { accessToken: rlt.data.accessToken, refreshToken: rlt.data.refreshToken };
          this.authApiService$.setTokens(token);
          this.authApiService$.setIsUser();
          this.authApiService$.startRefreshTimer();
          this.appService$.userDetail();
        } else { this.snackbar.show(rlt.message, false, 3000); }

      });
    } else {
      this.snackbar.show('Please provide the valid credentials', false, 3000);
      console.log(this.studentLoginForm.errors);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
