import { Pipe, PipeTransform } from '@angular/core';
import { Medicine } from '../shared/medicine.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Medicines:Medicine[], searchValue: string): any {
    if(!Medicines || ! searchValue){
      return Medicines;
    }
    return Medicines.filter(medicine => medicine.fullName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
