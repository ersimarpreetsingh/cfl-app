import { Component, OnInit } from '@angular/core';
import { AppService} from '../../../api/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public AppService$: AppService) { }

  ngOnInit(): void {

  }

}
