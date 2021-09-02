import { SnackbarService } from './../../services/snackbar.service';
import { AppService } from './../../api/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  helpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    school: new FormControl(''),
    comments: new FormControl(''),
  });

  constructor(private route: Location, private appService: AppService, private snackbar: SnackbarService) { }

  ngOnInit(): void {
  }

  helpSubmit(): void {
    this.appService.submitHelp(this.helpForm.value).subscribe(res => {
      if (res.success) {
        this.snackbar.show(res.message, true, 3000);
        this.route.back();
      }
    });
  }

}
