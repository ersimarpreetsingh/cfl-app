import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { WarningModalsComponent } from './warning-modals/warning-modals.component';



@NgModule({
  declarations: [SnackbarComponent, WarningModalsComponent],
  imports: [
    CommonModule
  ],
  exports: [SnackbarComponent, WarningModalsComponent],
})
export class SubComponentModule { }
