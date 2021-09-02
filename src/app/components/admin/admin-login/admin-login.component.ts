import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../api/app.service';
import { AuthApiService } from '../../../api/auth-api.service';
import { AuthTokens } from '../../../models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminLogInForm: FormGroup;
  constructor(private fb: FormBuilder, public AppService$: AppService, public AuthApiService$: AuthApiService, private router: Router) {
    this.AppService$.getUserListener().subscribe(res => {
      router.navigateByUrl('admin/dashboard');
    });
    this.adminLogInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get f(): any { return this.adminLogInForm.controls; }
  onSubmit(): void {
    if (this.adminLogInForm.valid) {
      this.AuthApiService$.adminLogin(this.adminLogInForm.value).subscribe(rlt => {
        if (rlt.success) {
          const token: AuthTokens = { accessToken: rlt.data.accessToken, refreshToken: rlt.data.refreshToken };
          this.AuthApiService$.setTokens(token);
          this.AuthApiService$.setIsAdmin();
          this.AuthApiService$.startRefreshTimer();
          this.AppService$.userDetail();
        }
      });
    } else {
      console.log('----------validation error--------');
      console.log(this.adminLogInForm.errors);
    }
  }

}
