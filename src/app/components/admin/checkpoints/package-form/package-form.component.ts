import { Router, ActivatedRoute } from '@angular/router';
import { CheckpointService } from './../../../../api/checkpoint.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss']
})
export class PackageFormComponent implements OnInit {
  submitButtonText = 'ADD';
  checkpointId = '';
  packageId = '';
  updatePackageId = '';
  packageData!: Package;
  packageForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    priceType: new FormControl(''),
    price: new FormControl(''),
    percentOf: new FormControl(''),
    debitFrom: new FormControl(''),
    creditTo: new FormControl(''),
    hasAdditionalPricing: new FormControl(false),
    additionalPriceType: new FormControl(''),
    additioanlPrice: new FormControl(''),
    additionalPercentOf: new FormControl(''),
    additionalDebitFrom: new FormControl(''),
    additionalCreditTo: new FormControl(''),
    moreInfo: new FormControl(''),
    degreeKey: new FormControl('NONE'),
    forMilitary: new FormControl(false),
    useAllSavings: new FormControl(false),
  });
  constructor(private checkpointApi: CheckpointService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.checkpointId = params.checkpointId;
      this.packageId = params.packageId;
      this.updatePackageId = params.updatePackageId;
      if (this.updatePackageId && this.updatePackageId.length > 0) {
        this.checkpointApi.getPackagetById(this.updatePackageId).subscribe(res => {
          if (res.success) {
            this.packageForm.setValue({
              title: res.data.title ? res.data.title : '',
              description: res.data.description ? res.data.description : '',
              priceType: res.data.priceType ? res.data.priceType : '',
              price: res.data.price ? res.data.price : '',
              percentOf: res.data.percentOf ? res.data.percentOf : '',
              debitFrom: res.data.debitFrom ? res.data.debitFrom : '',
              creditTo: res.data.creditTo ? res.data.creditTo : '',
              hasAdditionalPricing: res.data.hasAdditionalPricing ? res.data.hasAdditionalPricing : false,
              additionalPriceType: res.data.additionalPriceType ? res.data.additionalPriceType : '',
              additioanlPrice: res.data.additioanlPrice ? res.data.additioanlPrice : '',
              additionalPercentOf: res.data.additionalPercentOf ? res.data.additionalPercentOf : '',
              additionalDebitFrom: res.data.additionalDebitFrom ? res.data.additionalDebitFrom : '',
              additionalCreditTo: res.data.additionalCreditTo ? res.data.additionalCreditTo : '',
              moreInfo: res.data.moreInfo ? res.data.moreInfo : '',
              forMilitary: res.data.forMilitary ? res.data.forMilitary : false,
              degreeKey: res.data.degreeKey ? res.data.degreeKey : 'NONE',
              useAllSavings: res.data.useAllSavings ? res.data.useAllSavings : false,
            });
            this.packageData = res.data;
          }
        });
      }
      this.packageForm.get('debitFrom')?.valueChanges.subscribe(value => {
        if (value === 'NONE') {
          alert('You have selected NONE for \'debit from\'. No money will be deducted for this package from user account.');
        }
      });
    });
  }

  addPackage(): void {
    const formData = this.packageForm.value;
    if (this.updatePackageId && this.updatePackageId.length > 0) {
      formData._id = this.updatePackageId;
      formData.parentId = this.packageData.parentId;
      formData.checkpointId = this.packageData.checkpointId;
      this.checkpointApi.updatePackage(formData).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.router.navigateByUrl('admin/dashboard/checkpoints');
        }
      });
    } else {
      formData.parentId = this.packageId;
      formData.checkpointId = this.checkpointId;
      this.checkpointApi.addPackage(formData).subscribe(res => {
        this.router.navigateByUrl('admin/dashboard/checkpoints');
      });
    }
  }
}
