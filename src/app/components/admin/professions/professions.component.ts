import { SnackbarService } from './../../../services/snackbar.service';
import { Category } from './../../../models/profession.model';
import { ProfessionsService } from './../../../api/professions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss']
})
export class ProfessionsComponent implements OnInit {
  categories: Category[] = [];

  constructor(private professionsApi: ProfessionsService, private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.professionsApi.getCategories().subscribe(res => {
      if (res.success) {
        this.categories = res.data;
      }
    });
  }

  deleteProfession(professionId: any): void {
    this.professionsApi.deleteProfession(professionId).subscribe(res => {
      if (res.success) {
        this.snackbar.show(res.message, true);
        this.professionsApi.getCategories().subscribe(resp => {
          if (resp.success) {
            this.categories = resp.data;
          }
        });
      }
    });
  }
}
