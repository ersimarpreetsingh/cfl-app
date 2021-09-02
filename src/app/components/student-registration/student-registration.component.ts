import { SnackbarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../helper/passwordValidator';
import { AppService } from '../../api/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
  studentform: FormGroup;
  constructor(private fb: FormBuilder, public AppService$: AppService, public router: Router, private snackbar: SnackbarService) {
    this.studentform = this.fb.group({
      schoolCode: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') });
  }

  ngOnInit(): void {
  }

  get f(): any { return this.studentform.controls; }

  onSubmit(): void {
    if (this.studentform.valid) {
      this.AppService$.studentRegister(this.studentform.value).subscribe(res => {
        if (res.success) {
          this.studentform.reset();
          this.router.navigateByUrl('/student-login');
        } else { console.log(res); }
      });
    } else {
      this.snackbar.show('Please provide the valid information in the form.', false, 3000);
      console.log(this.studentform.errors);
    }
  }

}
