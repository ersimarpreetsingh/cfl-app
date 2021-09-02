import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionsService } from './../../../../api/professions.service';
import { SnackbarService } from './../../../../services/snackbar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  categoryId = '';
  submitButtonText = 'ADD';
  constructor(
    private snackbar: SnackbarService,
    private professionApi: ProfessionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.categoryId) {
        this.professionApi.getCategoryById(params.categoryId).subscribe(res => {
          this.categoryForm.get('name')?.setValue(res.data.name);
          this.categoryId = res.data._id ? res.data._id : '';
          this.submitButtonText = 'UPDATE';
        });
      }
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      if (this.categoryId && this.categoryId.length > 0) {
        const categoryData = {
          _id: this.categoryId,
          name: this.categoryForm.get('name')?.value,
        };
        this.professionApi.updateCategory(categoryData).subscribe(res => {
          if (res.success) {
            this.snackbar.show(res.message, true);
            this.router.navigateByUrl('/admin/dashboard/professionCategory');
          }
        });
      } else {
        this.professionApi.postCategory(this.categoryForm.value).subscribe(res => {
          if (res.success) {
            this.router.navigateByUrl('/admin/dashboard/professionCategory');
          }
        });
      }
    } else {
      this.snackbar.show('The form input fields are not valid.', false);
    }
  }
}
