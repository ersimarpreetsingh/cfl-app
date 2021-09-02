import { SnackbarService } from './../../../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionsService } from './../../../../api/professions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profession-form',
  templateUrl: './profession-form.component.html',
  styleUrls: ['./profession-form.component.scss']
})
export class ProfessionFormComponent implements OnInit {
  categoryId = '';
  professionId = '';
  submitButtonText = 'ADD';

  professionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    requiredDegree: new FormControl('', Validators.required),
    studentOption: new FormControl(''),
    grossAnnualSalary: new FormControl('', Validators.required),
    taxableIncome: new FormControl('', Validators.required),
    federalTax: new FormControl('', Validators.required),
    MATax: new FormControl('', Validators.required),
    socSec: new FormControl('', Validators.required),
    medicare: new FormControl('', Validators.required),
    netPayYearly: new FormControl('', Validators.required),
    netPayMonthly: new FormControl('', Validators.required),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private professionApi: ProfessionsService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params.categoryId;
      if (params.professionId) {
        this.professionApi.getProfessionById(params.professionId).subscribe(res => {
          this.professionId = res.data._id ? res.data._id : '';
          const formData = res.data;
          delete formData._id;
          delete formData.category;
          delete formData.createdAt;
          delete formData.updatedAt;
          delete formData.__v;
          this.professionForm.setValue(res.data);
          this.submitButtonText = 'UPDATE';
        });
      }
    });
  }

  addProfession(): void {
    if (this.professionForm.valid) {
      if (this.professionId && this.professionId.length > 0) {
        const professionData = this.professionForm.value;
        professionData._id = this.professionId;
        this.professionApi.updateProfession(professionData).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, true);
            this.router.navigateByUrl('/admin/dashboard/professionCategory');
          }
        });
      } else {
        this.professionApi.postProfesion(this.professionForm.value, this.categoryId).subscribe(res => {
          this.router.navigateByUrl('/admin/dashboard/professionCategory');
        });
      }
    } else {
      this.professionForm.markAsDirty();
    }
  }

}
