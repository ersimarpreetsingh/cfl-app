import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-modules',
  templateUrl: './money-modules.component.html',
  styleUrls: ['./money-modules.component.scss']
})
export class MoneyModulesComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
