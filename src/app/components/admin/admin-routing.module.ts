import { ParticipantReportComponent } from './participants/participant-report/participant-report.component';
import { LifeEventFormComponent } from './life-events/life-event-form/life-event-form.component';
import { PackageFormComponent } from './checkpoints/package-form/package-form.component';
import { CheckpointFormComponent } from './checkpoints/checkpoint-form/checkpoint-form.component';
import { CategoryFormComponent } from './professions/category-form/category-form.component';
import { CheckpointsComponent } from './checkpoints/checkpoints.component';
import { ProfessionFormComponent } from './professions/profession-form/profession-form.component';
import { ProfessionsComponent } from './professions/professions.component';
import { StudentsComponent } from './students/students.component';
import { ParticipantsComponent } from './participants/participants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard as AuthGuard } from '../../guard/admin.guard';
import { LifeEventsComponent } from './life-events/life-events.component';


const routes: Routes = [
    {
        path: '',
        component: AdminLoginComponent,
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
            {
                path: 'participants',
                component: ParticipantsComponent,
            },
            {
                path: 'participants/:participantId/report',
                component: ParticipantReportComponent,
            },
            {
                path: 'students',
                component: StudentsComponent,
            },
            {
                path: 'professionCategory/:categoryId/profession/new',
                component: ProfessionFormComponent
            },
            {
                path: 'professionCategory/:categoryId/profession/:professionId',
                component: ProfessionFormComponent
            },
            {
                path: 'professionCategory/new',
                component: CategoryFormComponent
            },
            {
                path: 'professionCategory/:categoryId',
                component: CategoryFormComponent
            },
            {
                path: 'professionCategory',
                component: ProfessionsComponent
            },
            {
                path: 'checkpoints/:checkpointId/package/:packageId/new',
                component: PackageFormComponent
            },
            {
                path: 'checkpoints/:checkpointId/package/new',
                component: PackageFormComponent
            },
            {
                path: 'checkpoints/:checkpointId/package/:updatePackageId',
                component: PackageFormComponent
            },
            {
                path: 'checkpoints/new',
                component: CheckpointFormComponent,
            },
            {
                path: 'checkpoints/:checkpointId',
                component: CheckpointFormComponent,
            },
            {
                path: 'checkpoints',
                component: CheckpointsComponent
            },
            {
                path: 'lifeEvent/new',
                component: LifeEventFormComponent
            },
            {
                path: 'lifeEvent/:lifeEventId',
                component: LifeEventFormComponent
            },
            {
                path: 'lifeEvent',
                component: LifeEventsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
