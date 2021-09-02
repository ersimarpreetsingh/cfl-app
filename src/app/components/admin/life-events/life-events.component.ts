import { LifeEventService } from './../../../api/life-event.service';
import { Component, OnInit } from '@angular/core';
import { LifeEvent } from 'src/app/models';

@Component({
  selector: 'app-life-events',
  templateUrl: './life-events.component.html',
  styleUrls: ['./life-events.component.scss']
})
export class LifeEventsComponent implements OnInit {
  lifeEvents: LifeEvent[] = [];
  constructor(private eventApi: LifeEventService) { }

  ngOnInit(): void {
    this.eventApi.getLifeEventListListener().subscribe(events => {
      this.lifeEvents = events;
    });
    this.eventApi.getLifeEvents();
  }

}
