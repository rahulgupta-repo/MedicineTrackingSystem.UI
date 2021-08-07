import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../shared/medicine.model';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  readonly apiURL="https://localhost:44369/api";
  constructor( private http: HttpClient) { }

  getAllMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.apiURL+'/Medicine');
  }

}
