import { LifeEventService } from './../../../../api/life-event.service';
import { SnackbarService } from './../../../../services/snackbar.service';
import { LifeEvent } from './../../../../models/life-event.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-event-form',
  templateUrl: './life-event-form.component.html',
  styleUrls: ['./life-event-form.component.scss']
})
export class LifeEventFormComponent implements OnInit {
  lifeEventId!: string;
  lifeEvent!: LifeEvent;
  lifeEventForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    debitFrom: new FormControl(''),
    creditTo: new FormControl(''),
  });

  submitButtonText = 'ADD';
  constructor(
    private snackbar: SnackbarService,
    private eventApi: LifeEventService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.lifeEventId) {
        this.lifeEventId = params.lifeEventId;
        this.eventApi.getLifeEventById(this.lifeEventId).subscribe(res => {
          if (res.success) {
            this.lifeEvent = res.data;
            this.lifeEventForm.setValue({
              title: res.data.title ? res.data.title : '',
              description: res.data.description ? res.data.description : '',
              type: res.data.type ? res.data.type : '',
              price: res.data.price ? res.data.price : '',
              debitFrom: res.data.debitFrom ? res.data.debitFrom : '',
              creditTo: res.data.creditTo ? res.data.creditTo : '',
            });
          }
        });
      }
    });
  }

  addLifeEvent(): void {
    if (this.lifeEventForm.valid) {
      if (this.lifeEventId) {
        const eventData = this.lifeEventForm.value;
        eventData._id = this.lifeEventId;
        this.eventApi.updateLifeEvent(eventData).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, true, 3000);
            this.router.navigateByUrl('admin/dashboard/lifeEvent');
          }
        });
      } else {
        this.eventApi.addLifeEvent(this.lifeEventForm.value).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, true, 3000);
            this.router.navigateByUrl('admin/dashboard/lifeEvent');
          }
        });
      }
    } else {
      this.snackbar.show('Form data is invalid.', false, 3000);
    }
  }

}
