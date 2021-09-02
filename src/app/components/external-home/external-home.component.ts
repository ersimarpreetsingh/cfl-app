import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../api/app.service';

@Component({
  selector: 'app-external-home',
  templateUrl: './external-home.component.html',
  styleUrls: ['./external-home.component.scss']
})
export class ExternalHomeComponent implements OnInit {
  participantForm: FormGroup;

  constructor(public appService$: AppService) {
    this.participantForm = new FormGroup({
      organizationName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      contactPerson: new FormControl(''),
      title: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      email: new FormControl(''),
      comments: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  get f(): any { return this.participantForm.controls; }

  submitForm(): void {
    if (this.participantForm.valid) {
      this.appService$.praticipentRegister(this.participantForm.value).subscribe(res => {
        this.participantForm.reset();
      });
    } else {
      console.log(this.participantForm.errors);
    }
  }
}
