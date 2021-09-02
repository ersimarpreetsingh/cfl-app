import { SubComponentModule } from './../sub-component/sub-component.module';
import { PipeModule } from './../../pipes/pipes.module';
import { DProfileComponent } from './d-profile/d-profile.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavRoutingModule } from './nav-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ProfessionsComponent } from './professions/professions.component';
import { MoneyModulesComponent } from './money-modules/money-modules.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [NavComponent, ProfessionsComponent, CheckpointComponent, DProfileComponent, MoneyModulesComponent],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    NavRoutingModule,
    SubComponentModule,
  ]
})
export class NavModule { }
