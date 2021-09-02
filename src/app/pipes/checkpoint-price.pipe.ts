import { AppService } from './../api/app.service';
import { Package } from 'src/app/models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkpointPrice'
})
export class CheckpointPricePipe implements PipeTransform {
  constructor(private appApi: AppService) {

  }
  transform(value: Package, ...args: unknown[]): any {
    if (value.priceType === 'value') {
      return value.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    } else if (value.priceType === 'percent') {
      const user = this.appApi.getUser();
      if (user) {
        let percentof;
        switch (value.percentOf) {
          case 'grossAnnualSalary':
            percentof = user.profession.grossAnnualSalary;
            break;
          case 'grossMonthlySalary':
            percentof = user.profession.grossAnnualSalary / 12;
            break;
          case 'monthlyTakeHomePay':
            percentof = (user.profession?.grossAnnualSalary
              - (user.profession?.federalTax + user.profession?.MATax + user.profession?.socSec + user.profession?.medicare)) / 12;
            break;
        }
        const finalPrice = ((value.price / 100) * percentof);
        const numStr = finalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        // return ((value.price / 100) * percentof).toFixed(2);
        return numStr;
      }
    } else {
      return value.price ? value.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : 'N/A';
    }
  }
}
