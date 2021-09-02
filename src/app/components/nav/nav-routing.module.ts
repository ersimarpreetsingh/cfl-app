import { MoneyModulesComponent } from './money-modules/money-modules.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { NavComponent } from './nav/nav.component';
import { UserAuthGuard } from './../../guard/user-auth.guard';
import { IndexComponent } from './index/index.component';
import { DProfileComponent } from './d-profile/d-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionsComponent } from './professions/professions.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [UserAuthGuard],
        component: NavComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent
            },
            {
                path: 'money-modules',
                component: MoneyModulesComponent
            },
            {
                path: 'professions',
                component: ProfessionsComponent
            },
            {
                path: 'profile',
                component: DProfileComponent
            },
            {
                path: 'checkpoint',
                component: CheckpointComponent,
            },
            {
                path: 'checkpoint/:id',
                component: CheckpointComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class NavRoutingModule { }
