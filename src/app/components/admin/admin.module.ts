import { PipeModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionsComponent } from './professions/professions.component';
import { ProfessionFormComponent } from './professions/profession-form/profession-form.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { ParticipantFormComponent } from './participants/participant-form/participant-form.component';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { CategoryFormComponent } from './professions/category-form/category-form.component';
import { CheckpointFormComponent } from './checkpoints/checkpoint-form/checkpoint-form.component';
import { PackageFormComponent } from './checkpoints/package-form/package-form.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LifeEventsComponent } from './life-events/life-events.component';
import { LifeEventFormComponent } from './life-events/life-event-form/life-event-form.component';
import { ParticipantReportComponent } from './participants/participant-report/participant-report.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    ParticipantsComponent,
    StudentsComponent,
    DashboardComponent,
    ProfessionsComponent,
    ProfessionFormComponent,
    StudentFormComponent,
    ParticipantFormComponent,
    CheckpointsComponent,
    CategoryFormComponent,
    CheckpointFormComponent,
    PackageFormComponent,
    LifeEventsComponent,
    LifeEventFormComponent,
    ParticipantReportComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipeModule,
    AngularEditorModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
