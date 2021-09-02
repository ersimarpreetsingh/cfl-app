import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';
import { AppService } from '../../../api/app.service';
import { User } from '../../../models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessionsService } from '../../../api/professions.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/profession.model';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss']
})
export class ProfessionsComponent implements OnInit {
  user!: User;
  selectedProfessionId!: string;
  selectedProfessionName!: string;

  avatars: {
    id: number;
    imageUrl: string;
    selected: boolean;
  }[] = [];
  profileForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required)
  });

  categories: Category[] = [];
  constructor(
    private professionsApi: ProfessionsService,
    private api: AppService,
    private snackbar: SnackbarService,
    private router: Router
  ) {
    this.api.getUserListener().subscribe(res => {
      this.user = res;
      this.profileForm.setControl('email', new FormControl(this.user.email, Validators.required));
    });
    this.api.userDetail();
  }

  ngOnInit(): void {
    for (let i = 0; i < 32; i++) {
      this.avatars.push({
        id: i,
        imageUrl: `assets/images/avatar${i + 1}.png`,
        selected: false,
      });
    }
    this.professionsApi.getCategories().subscribe(res => {
      if (res.success) {
        this.categories = res.data;
      }
    });
  }

  submitProfile(): void {
    if (this.profileForm.valid) {
      if (this.avatars.find(avatar => avatar.selected)) {
        this.user.firstName = this.profileForm.get('fname')?.value;
        this.user.lastName = this.profileForm.get('lname')?.value;
        this.user.occupation = this.profileForm.get('occupation')?.value;
        this.user.imageUrl = this.avatars.find(avatar => avatar.selected)?.imageUrl;
        this.user.profession = this.selectedProfessionId;
        this.api.updateUser(this.user, true).subscribe(res => {
          if (res.success) {
            this.api.setUser(res.data);
            this.snackbar.show('Thanks for updating your profile.', true);
            this.router.navigateByUrl('nav/profile');
          }
        });
      } else {
        this.snackbar.show('Please choose an avatar', false);
      }
    } else {
      this.snackbar.show('Form inputs are not valid.', false);
    }
  }

  submitProfession(): void {
    this.profileForm.get('occupation')?.setValue(this.selectedProfessionName);
  }

  professionClick(event: Event, categoryId: any, professionId: any): void {
    event.preventDefault();
    this.categories.forEach(category => {
      this.uncheckAll(category.professions);
    });
    const selectedProfession = this.categories
      .find(category => category._id === categoryId)
      ?.professions?.find(profession => profession._id === professionId);
    if (selectedProfession) {
      selectedProfession.selected = true;
      this.selectedProfessionId = selectedProfession._id ? selectedProfession._id : '';
      this.selectedProfessionName = selectedProfession.name ? selectedProfession.name : '';
    }
  }

  selectAvatar(avatarId: number): void {
    this.uncheckAll(this.avatars);
    const clickedAvatar = this.avatars.find(avatar => avatar.id === avatarId);
    if (clickedAvatar) {
      clickedAvatar.selected = true;
    }
  }

  uncheckAll(list: any): void {
    if (list) {
      list.forEach((item: any) => {
        item.selected = false;
      });
    }
  }
}
