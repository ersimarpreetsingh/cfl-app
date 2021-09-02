import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExternalHomeComponent } from './components/external-home/external-home.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoneyModulesComponent } from './components/money-modules/money-modules.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { UserAuthGuard as AuthGuard } from './guard/user-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'nav',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/nav/nav.module').then(m => m.NavModule)
  },
  { path: 'external-home', component: ExternalHomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'money-modules', component: MoneyModulesComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'profile/:id', component: PublicProfileComponent },
  {
    path: 'money-modules',
    component: MoneyModulesComponent
  },
  { path: '', component: ExternalHomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
