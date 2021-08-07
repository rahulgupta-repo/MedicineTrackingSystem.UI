import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from '../shared/medicine.model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  searchValue: string;
  constructor(private _medicineService : MedicineService) { }
  Medicines: Medicine[];
  ngOnInit(): void {
    this.getAllMedicines();
  }

  getAllMedicines(){
    this._medicineService.getAllMedicines().subscribe(data=>{
      this.Medicines=data
    })
  }
  getDateDiff(expiryDate:any):number{
    var today= new Date();
    var expDate=new Date(expiryDate);
    var Time = expDate.getTime() - today.getTime(); 
    var Days = Time / (1000 * 3600 * 24); //Diference in Days new Date(date2 - date1).getDate() - 1
    return Days;
  }

}
